const router = require("express").Router();
const { updateRole } = require("../controllers/userController");
const { auth } = require("../middleware/auth");

router.patch("/updateRole", auth(["admin"]), updateRole);

module.exports = router;
