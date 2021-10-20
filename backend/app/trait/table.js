const pool = require("../../databasePool.js");

class TraitTable {
  static getTraitId(traits) {
    const { traitType, traitValue } = traits;

    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id FROM traittable WHERE "traitType" = $1 AND "traitValue" = $2`,
        [traitType, traitValue],
        (error, response) => {
          if (error) return reject(error);

          resolve({ traitId: response.rows[0].id });
        }
      );
    });
  }
}

module.exports = TraitTable;
