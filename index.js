const express  = require("express")
const cors = require("cors");
const connectDatabase= require("./utils/connectDatabase")
const userRouter= require("./Routes/userRoutes")
const {transactionRoute}= require("./Routes/transactionRoute")

const app= express()
const port = 8000;
app.use(express.json())
app.use(cors())

connectDatabase()
app.use(userRouter);
app.use(transactionRoute)

app.listen(port, ()=>{
console.log(`your backend server is running on ${port}`)
})

