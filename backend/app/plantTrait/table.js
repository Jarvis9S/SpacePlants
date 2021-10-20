const pool = require("../../databasePool.js");
const TraitTable = require("../trait/table.js")

class PlantTraitTable {
    static storePlantTrait({ plantId, traitType, traitValue}) {
        return new Promise((resolve, reject) => {
            TraitTable.getTraitId({ traitType, traitValue })
            .then (({ traitId}) => {
                pool.query(
                    `INSERT INTO plantTrait("traitId", "plantId") VALUES($1,$2)`,
                   [traitId, plantId],
                   (error, response) => {
                    if(error) return reject(error);

                    resolve();
                   }
                )
            });
        });
    }
}

module.exports = PlantTraitTable;