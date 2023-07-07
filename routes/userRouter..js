const router = require("express").Router();
const { updateRole } = require("../controllers/userController");
const { adminAuth } = require("../middleware/auth");

router.patch("/updateRole", adminAuth(["admin"]), updateRole);

module.exports = router;
