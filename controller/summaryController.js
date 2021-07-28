const path = require("path")
const Summary = require("../model/summary")
const User = require("../model/user")
const cloudinary =  require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'mestudent', 
    api_key: process.env.APIKEY, 
    api_secret: process.env.APISECRET 
  });

const md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
})

const getSummary = async (req, res) => {
    const summary = await Summary.findById(req.params.id)
    summary.content = md.render(summary.content)
    res.render("summary.ejs", {summary:summary})
}

const getPublishPage = (req, res) => {
    res.render("publish.ejs")
}

const publishSummary = async (req, res) => {
    try{
        let imageUrl = null;
        cloudinary.uploader.upload(req.body.cover, (err, result) => {
            console.log(err)
            imageUrl = result
        })
        const summary = new Summary({
            title: req.body.title,
            category:req.body.category,
            content: req.body.content,
            publisher: req.user.name,
            imageUrl: imageUrl
        })
        const savedSummary = await summary.save()   
        req.user.publishedSummaries.push(savedSummary._id)
        await req.user.save()
        res.redirect("/")

    }catch{
        res.render("404")
    }
}

const deleteSummary = (req, res) => {

}

const editSummary = (req, res) => {

}

module.exports = {
    getSummary, 
    publishSummary,
    getPublishPage,
    editSummary, 
    deleteSummary
}