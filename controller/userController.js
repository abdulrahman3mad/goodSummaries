const User = require("../model/user")
const Summary = require("../model/summary")

const getProfilePage = async (req, res) => {
    const publishedSummaries = await Summary.find({publisher: req.user.name})
    res.render("profile.ejs", {publishedSummaries: publishedSummaries})
}

const getEditProfilePage = async (req, res) => {
    res.render("editProfile.ejs")
}

const editData = (req, res) => {

}

module.exports = {
    getProfilePage,
    getEditProfilePage, 
    editData
}