const express = require("express");
const TravelEngine = require("./traveltime/engine.js");
const plantRouter = require("./api/plant.js");
const travelRouter = require("./api/travel.js");

const app = express();
const engine = new TravelEngine();

app.locals.engine = engine;

app.use("/plant", plantRouter);
app.use("/travel", travelRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

engine.start();

module.exports = app;
