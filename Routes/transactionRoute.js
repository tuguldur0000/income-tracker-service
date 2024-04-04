const {Router}= require("express")
const {getIncome, createIncome}=require("../controller/incomeController")

const transactionRoute= Router()

transactionRoute.get("/get-transaction", getIncome)
transactionRoute.post("/create-transaction", createIncome)

module.exports= {transactionRoute}