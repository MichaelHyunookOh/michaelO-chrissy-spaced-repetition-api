# A Wikket's Guide to Hozen API!

Live Link: https://guide-to-hozen.vercel.app/
Client Repo: https://github.com/thinkful-ei-gecko/Yulia-JamesL-Spaced-Repetition-Client

## API Endpoints

### User Endpoints

#### Post

/api/user

Register new account with name, username, and password

### Auth Endpoints

#### Post

/api/auth/token

Users with registered account can log in with username and password

### Language Endpoints

#### Get

/api/language

Shows scores and words to learn on dashboard

/api/language/head

Gets the next word to learn

#### Post

/api/language/guess

Posts the user's guess

## Local dev setup

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder_mifflin spaced-repetition
createdb -U dunder_mifflin spaced-repetition-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`
