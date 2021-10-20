const pool = require("../../databasePool.js");
const PlantTable = require("./table.js");
const Plant = require("./index.js");

const getPlantWithTraits = ({ plantId }) => {
    return Promise.all([
        PlantTable.getPlant({ plantId }),
        new Promise((resolve, reject) => {
            pool.query(
                `SELECT "traitType", "traitValue" 
                FROM traittable 
                INNER JOIN plantTrait ON traittable.id = plantTrait."traitId" 
                WHERE plantTrait."plantId" = $1`,
                [plantId],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        })
    ])
    .then(([plant, plantTraits]) => {
        return new Plant({ ...plant, plantId, traits: plantTraits })
    })
    .catch(error => console.error(error));
};


// getPlantWithTraits({ plantId: 1})
//     .then(plant => console.log(plant))
//     .catch(error => console.log(error));

    module.exports = { getPlantWithTraits };