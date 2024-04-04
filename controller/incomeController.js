const transactionModel = require('../models/transactionModel')

const getIncome = async (req, res) => {
  console.log("hello");
  try {
    const response = await transactionModel.find({});
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createIncome = async (req, res) => {
  const data = req.body;
  try {
    const response = await transactionModel.create(data);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getIncome, createIncome };