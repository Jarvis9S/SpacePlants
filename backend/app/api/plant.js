const { Router } = require("express");
const PlantTable = require("../plant/table.js");

const router = new Router();

router.get("/new", (req, res, next) => {
  const plant = req.app.locals.engine.travel.newPlant();
  PlantTable.storePlant(plant)
    .then(({ plantId }) => {
      console.log("plantId", plantId);
      plant.plantId = plantId;
      res.json({ plant });
    })
    .catch((error) => next(error));
});

module.exports = router;
