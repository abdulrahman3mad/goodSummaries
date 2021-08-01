const User = require("../model/user")
const Summary = require("../model/summary")
const fs = require("fs")

const getProfilePage = async (req, res) => {
    const user = req.user._id
    if(req.user._id != req.params.id){
        const user = await User.findById(req.params.id)
    }
    const publishedSummaries = await Summary.find({publisherId: user._id})
    res.render("profile.ejs", {publishedSummaries: publishedSummaries, visitorUser: user})
}

const getEditProfilePage = async (req, res) => {
    res.render("editProfile.ejs")
}

const editData = async (req, res) => {
    let newData = {}
    if(req.body.userName!='' && req.body.userName!=null){
        newData.userName = req.body.userName
    }
    if(req.file!='' && req.file!=null){
        newData.avatar = {
            data: fs.readFileSync("./uploads/" + req.file.filename),
            contentType: req.file.mimetype
        }
    }
    await User.updateOne({_id: req.user._id}, newData)
    await Summary.updateMany({publisherId: req.user._id}, {publisherName: newData.userName})
    
    res.redirect(`/profile/${req.user._id}`)
}

module.exports = {
    getProfilePage,
    getEditProfilePage, 
    editData
}