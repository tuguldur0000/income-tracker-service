const Router = require("express");
const { signup, Login } = require("../controller/userController");
const userModel = require("../models/userModel");
const userRouter = Router();

const validateEmail = async (req, res, next) => {
  const body = req.body;
  console.log(body)
  const user = await userModel.findOne({ email: body.email });
  console.log("midlleware", user);
  if (!user) {
    next();
  } else {
    res.status(403).send("Email Address is already taken");
  }
};
userRouter.post("/signup", validateEmail, signup);
userRouter.post("/login", Login);

module.exports = userRouter;
