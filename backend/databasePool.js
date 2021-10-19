const { Pool } = require("pg");
const databaseConfiguration = require("./hidden/databaseConfiguration.js");

const pool = new Pool(databaseConfiguration);

module.exports = pool;
