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

  static getPlant({ plantId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT collectdate, nickname, "travelId" FROM planttable WHERE planttable.id = $1',
        [plantId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("There's no plant with such ID."));

          resolve(response.rows[0]);
        }
      )
    });
  }
}

// PlantTable.getPlant({ plantId: 1 })
// .then (plant => console.log(plant))
// .catch(error => console.log("error". error));

module.exports = PlantTable;
