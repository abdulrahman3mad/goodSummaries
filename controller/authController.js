const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs")
const User = require("../model/user")

const getLoginPage = (req, res) => {
    res.render("login.ejs", {errorMessage: ""})
}

const getSignUpPage = (req, res) => {
    res.render("signup.ejs", {errorMessage:""})
}

const login = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user)
            res.render("login.ejs", {errorMessage: "This email is not registered yet!"})
        
        const isEqual = await bcrypt.compare(req.body.password, user.password)
        if(!isEqual)
            res.render("login.ejs", {errorMessage: "This password is not right"})

        const token = jwt.sign({_id: user._id}, "Summaries is a good place")
        res.cookie("auth-token", token)
        res.redirect("/")
    }catch{
        res.render("404.ejs")
    }
}

const signUp = async (req, res) => {
    try{
        const userByEmail = await User.findOne({email: req.body.email})

        if(userByEmail)  res.render("signup.ejs", {errorMessage: "This email is already registered"})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
            avatar:{
                data: fs.readFileSync("./uploads/avatar-1627740642530"),
                contentType: "image/jpeg"
            }
        })
        await newUser.save()
        const token = jwt.sign({_id: newUser._id}, "Summaries is a good place")
        res.cookie("auth-token.ejs", token)
        res.redirect("/")        
    }catch{
        res.render("404.ejs")
    }
}

const logout = (req, res) => {
    res.cookie("auth-token", "..", {maxAge: 1})
    res.redirect("/")
}

module.exports = {
    getLoginPage, 
    getSignUpPage, 
    login,
    signUp,
    logout
}