const { Router } = require("express");
const AccountTable = require("../account/table");

const router = new Router();

router.post("/signup", (req, res, next) => {
    const { username, passwordis } = req.body;

    AccountTable.storeAccount({ username, passwordis })
    .then(() => res.json({ message: "account successful!" }))
    .catch(error => next(error));
})

module.exports = router;
