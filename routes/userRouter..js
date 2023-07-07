const router = require("express").Router();
const { updateRole } = require("../controllers/userController");

router.patch("/updateRole", updateRole);

module.exports = router;
