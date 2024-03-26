const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const userData = req.body;
  const saltRounds = 10;
  const password = userData.password;
  const hash = bcrypt.hashSync(password, saltRounds);
  const data = { ...userData, password: hash };
  console.log("creating", data);
  try {
    const user = await userModel.create(data);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    const hashedPassword = user.password;
    const isUser = bcrypt.compareSync(password, hashedPassword);
    if (isUser) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "check passwordor email" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { signup, Login };
