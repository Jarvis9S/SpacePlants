const { Router } = require("express");

const router = new Router();

router.get("/new", (req, res) => {
  res.json({ travel: req.app.locals.engine.travel.newPlant() });
});

module.exports = router;
