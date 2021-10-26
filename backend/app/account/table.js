const pool = require("../../databasePool.js");

class AccountTable{
    static storeAccount({ username, passwordis }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO account(username, passwordis) VALUES VALUES($1,$2)`,
                [username, passwordis],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            );
        });
    }
}

module.exports = AccountTable;