const {Router}= require("express")
const {getIncome, createIncome, deleteTransaction, editTransaction}=require("../controller/incomeController")

const transactionRoute= Router()

transactionRoute.get("/get-transaction", getIncome)
transactionRoute.post("/create-transaction", createIncome)
transactionRoute.delete("/delete-transaction/:transactionId", deleteTransaction)
transactionRoute.put("/edit-transaction/:transactionId",editTransaction )
module.exports= {transactionRoute}