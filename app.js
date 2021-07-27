const app = require("express")()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

app.set("view engine", "ejs")
mongoose.connect(process.env.MongoDbURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("great")
})

app.listen(process.env.PORT, () => {
    console.log("Everything is nice here")
})