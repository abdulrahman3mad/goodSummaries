const Summary = require("../model/summary")
const markDown = require("markdown-it")()

const search = (req) => {
    let searchResult = {}
    if(req.query.title!=undefined && req.query.title!=""){
        searchResult.title = new RegExp(req.query.title, "i")
    }
    if(req.query.publisher!=undefined && req.query.publisher!=""){
        searchResult.publisher = new RegExp(req.query.publisher, "i")
    }
    if(req.query.category!=undefined && req.query.category!="all"){
        searchResult.category = req.query.category
    }
    return searchResult
}

const getHome = async (req, res) => {
    try{
        const summaries = await Summary.find(search(req))
        res.render("home", {summaries: summaries})
    }catch{
        res.render("404")
    }
}

module.exports = {
    getHome
}