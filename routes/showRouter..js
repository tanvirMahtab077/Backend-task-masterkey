const router = require("express").Router();
const { addShow } = require("../controllers/showController");
const { addCastAndCrews } = require("../middleware/addCastAndCrews");
const { auth } = require("../middleware/auth");

router.post("/add", auth(["admin", "creator"]), addCastAndCrews, addShow);

module.exports = router;
