const { Router } = require("express");
const PlantTable = require("../plant/table.js");

const router = new Router();

router.get("/new", (req, res) => {
  const plant = req.app.locals.engine.travel.newPlant();
  PlantTable.storePlant(plant)
    .then(({ plantId }) => {
      console.log("draonID", plantId);
      plant.plantId = plantId;
      res.json({ plant });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
