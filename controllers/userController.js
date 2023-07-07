const User = require("../model/User");

exports.updateRole = async (req, res, next) => {
  const { role, email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user.role !== "admin") {
      await User.updateOne({ email }, { role });
      res.status(200).json({ message: "Update successful" });
    } else {
      res
        .status(400)
        .json({ message: "User is an Admin.Admin can't be update..." });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "An error occurred", error: err.message });
  }
};
