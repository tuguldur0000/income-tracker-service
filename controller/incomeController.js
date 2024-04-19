const transactionModel = require("../models/transactionModel");

const getIncome = async (req, res) => {
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
const deleteTransaction = async (req, res) => {
  const transactionId = req.params.transactionId;
  try {
    const result = await transactionModel.findByIdAndDelete(transactionId);
    res.status(200).send(result);
    if (!result) {
      res.status(500).send("not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const editTransaction = async (req, res) => {
  const body = req.body;
  const id = req.params.transactionId;
  console.log(body);
  try {
    const edit = await transactionModel.findByIdAndUpdate(id, body);
    if (edit) {
      return res.status(200).send(edit);
    } else {
      return res.status(404).send("Transaction not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getIncome,
  createIncome,
  editTransaction,
  deleteTransaction,
};
