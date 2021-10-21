const pool = require("../../databasePool");
const PlantTraitTable = require("../plantTrait/table.js");

class PlantTable {
  static storePlant(plant) {
    const { collectdate, nickname, travelId } = plant;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO planttable(collectdate, nickname, "travelId") VALUES($1,$2,$3) RETURNING id`,
        [collectdate, nickname, travelId],
        (error, response) => {
          if (error) return reject(error);

          const plantId = response.rows[0].id;

          Promise.all(plant.traits.map(({ traitType, traitValue }) => {
            return PlantTraitTable.storePlantTrait({
              plantId, traitType, traitValue
            });
          }))
          .then(() => resolve({ plantId }))
          .catch(error => reject(error));
        }
      )
    });
  }
}

module.exports = PlantTable;
