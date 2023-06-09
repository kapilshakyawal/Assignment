require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
// DB connection
const mongoose=require("mongoose")
mongoose.connect(process.env.DB).then(() => {
    console.log("DB is connnected...")
    }).catch((err) => {
    console.error("Something went wrong..."+ err)
    })


// middlewares 
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.get("/",(req,res) => {
    res.send("Hello from root")
})


// routes
const user = require("./routes/userRoute")
app.use("/",user)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})