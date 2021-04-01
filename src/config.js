module.exports = {
  PORT: process.env.PORT || 7070,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://eyccsjcw:noROlwvqwt7sccj_2lGuXgN-LUOnKo57@kashin.db.elephantsql.com:5432/eyccsjcw",
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || "change-this-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
