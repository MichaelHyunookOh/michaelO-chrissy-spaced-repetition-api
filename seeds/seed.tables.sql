BEGIN;

TRUNCATE
  "word",
  "language",
  "user";

INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "language" ("id", "name", "user_id")
VALUES
  (1, 'Hozen', 1);

INSERT INTO "word" ("id", "language_id", "original", "translation", "next")
VALUES
  (1, 1, 'frikfrak', 'feather', 2),
  (2, 1, 'jabber', 'mouth', 3),
  (3, 1, 'wikket', 'anyone who is not Hozen', 4),
  (4, 1, 'nib', 'loot', 5),
  (5, 1, 'spooky-dooks', 'constipation', 6),
  (6, 1, 'ookapalooza', 'the greatest party of all time', 7),
  (7, 1, 'mook-mook', 'squirrel', 8),
  (8, 1, 'slerp', 'beer', 9),
  (9, 1, 'jibbet', 'a unit of time', 10),
  (10, 1, 'mopey-dope', 'sad or depressed person', null);

UPDATE "language" SET head = 1 WHERE id = 1;

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('word_id_seq', (SELECT MAX(id) from "word"));
SELECT setval('language_id_seq', (SELECT MAX(id) from "language"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;
