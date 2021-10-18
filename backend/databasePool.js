const { Pool } = require("pg");
const databaseConfiguration = require("./hidden/databaseConfiguration.js");

const pool = new Pool(databaseConfiguration);

module.exports = pool;

pool.query("SELECT * FROM traveltable", (error, response) => {
  if (error) return console.log(error);
  console.log(response.rows);
});

// ./node_modules/nodemon/bin//nodemon.js databasePool.js
