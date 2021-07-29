const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv").config()
const path = require("path")
const ejs = require("ejs")  
//routers 
const authRouter = require("./router/authRouter")
const summaryRouter = require("./router/summaryRouter")
const homeController = require("./controller/homeController")
const userRouter = require("./router/userRouter")
//middleware
const isTokenVerified = require("./middleWares/AuthMiddleWares")

app.set("view engine", ejs)
app.set("views", path.join(__dirname, "/views"))
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(cookieParser())
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(process.env.PORT, () => {
        console.log("Everything is nice here")
    })
})

app.get("/", isTokenVerified, homeController.getHome)
app.use("/", authRouter)
app.use("/", isTokenVerified, userRouter)
app.use("/", isTokenVerified, summaryRouter)

