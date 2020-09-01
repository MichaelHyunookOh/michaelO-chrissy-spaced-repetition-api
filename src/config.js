module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL
    || 'postgres://nvidvawqepidba:895c503d8effdb6a0371ac00a817ab176d3e6033620665c124465e19a6315532@ec2-54-234-28-165.compute-1.amazonaws.com:5432/d19gbbfq82c6aj',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
}
