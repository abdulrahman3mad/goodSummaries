const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user")

//generic functions 
function creatJWToken(res, user) {
    const token = jwt.sign({_id: user._id}, "Summaries is a good place")
    res.cookie("auth-token", token)
}

const getLoginPage = (req, res) => {
    res.render("login", {errorMessage: ""})
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
        const userByName = await User.findOne({name: req.body.email})

        if(userByEmail)  res.render("signup", {errorMessage: "This email is already registered"})

        if(userByName)  res.render("signup", {errorMessage: "This name is already registered"})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        creatJWToken(res, newUser)
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