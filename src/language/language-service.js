const { LinkedList } = require("../utils/LinkedLists");

const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from("language")
      .select(
        "language.id",
        "language.name",
        "language.user_id",
        "language.head",
        "language.total_score"
      )
      .where("language.user_id", user_id)
      .first();
  },

  getLanguageWords(db, language_id) {
    return db
      .from("word")
      .select(
        "id",
        "language_id",
        "original",
        "translation",
        "next",
        "memory_value",
        "correct_count",
        "incorrect_count"
      )
      .where({ language_id });
  },

  getNextWord(db, head) {
    return db
      .from("word")
      .select("original", "correct_count", "incorrect_count")
      .where("word.id", head)
      .then((word) => {
        return {
          nextWord: word[0].original,
          wordCorrectCount: word[0].correct_count,
          wordIncorrectCount: word[0].incorrect_count,
        };
      });
  },

  createLinkedList(arr, language) {
    let list = new LinkedList();
    let curr = arr.find((word) => word.id === language.head);

    list.insertLast(curr);

    while (curr.next !== null) {
      curr = arr.find((word) => word.id === curr.next);
      list.insertLast(curr);
    }
    return list;
  },

  insertWord(db, words, language_id, total_score) {
    return db.transaction(async (trx) => {
      return Promise.all([
        trx("language")
          .where({ id: language_id })
          .update({ total_score, head: words[0].id }),
        ...words.map((word, index) => {
          if (index + 1 >= words.length) {
            word.next = null;
            words[index - 1].next = word;
          } else {
            word.next = words[index + 1].id;
          }
          return trx("word")
            .where({ id: word.id })
            .update({ ...word });
        }),
      ]);
    });
  },
};

module.exports = LanguageService;
