const express = require("express");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter.");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Movie List Api",
    author: "Tanvir Mahtab (Software Engineer)",
  });
});

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
