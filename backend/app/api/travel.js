const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.json({ travel: req.app.locals.engine.travel });
});

module.exports = router;
