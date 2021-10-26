const express = require("express");
const cors = require("cors");
const TravelEngine = require("./traveltime/engine.js");
const plantRouter = require("./api/plant.js");
const travelRouter = require("./api/travel.js");
const accountRouter = require("./api/account.js");

const app = express();
const engine = new TravelEngine();

app.locals.engine = engine;

app.use("/account", accountRouter);
app.use("/plant", plantRouter);
app.use("/travel", travelRouter);
app.use(cors({ origin: "http://localhost:1234" }));
app.use(express.json());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

engine.start();

module.exports = app;
