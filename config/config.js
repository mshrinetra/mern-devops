module.exports = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  MONGO_DB_HOST: process.env.MONGO_DB_HOST || "mongo-db",
  MONGO_DB_PORT: process.env.MONGO_DB_PORT || 27017,
  MONGO_DB_USER: process.env.MONGO_DB_USER,
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
};
