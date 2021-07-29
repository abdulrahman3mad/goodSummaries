const path = require("path")
const Summary = require("../model/summary")
const User = require("../model/user")

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
        const summary = new Summary({
            title: req.body.title,
            category:req.body.category,
            content: req.body.content,
            publisher: req.user.name,
        })
        const savedSummary = await summary.save()   
        req.user.publishedSummaries.push(savedSummary._id)
        await req.user.save()
        res.redirect("/")

    }catch{
        res.render("404.ejs")
    }
}

const deleteSummary = (req, res) => {

}

const getEditSummaryPage = async (req, res) => {
    //caching here
    const summary = await Summary.findById(req.params.id)
    res.render("editSummary.ejs", {summary:summary})
}

const editSummary = async (req, res) => {
    
    const newSummary = {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
    }
    await Summary.updateOne({_id:req.params.id}, newSummary)
    res.redirect(`/summary/${req.params.id}`)
}

module.exports = {
    getSummary, 
    publishSummary,
    getPublishPage,
    getEditSummaryPage,
    editSummary, 
    deleteSummary
}