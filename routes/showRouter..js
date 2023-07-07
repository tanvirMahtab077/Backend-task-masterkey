const router = require("express").Router();
const { addShow,findShowById,findAllShow } = require("../controllers/showController");
const { addCastAndCrews } = require("../middleware/addCastAndCrews");
const { auth } = require("../middleware/auth");

router.post("/add", auth(["admin", "creator"]), addCastAndCrews, addShow);
router.get("/findOne", auth(["admin", "creator",'basic']), findShowById);
router.get("/all", auth(["admin", "creator",'basic']), findAllShow);



module.exports = router;
