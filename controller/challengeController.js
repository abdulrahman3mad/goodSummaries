const Challenge = require("../model/challenge")
const User = require("../model/user")
const Summary = require("../model/summary")

const getChallengePage = async (req, res) => {
    const challenge = await Challenge.findOne({user: req.user._id})
    let summaries = null
    if(challenge){
        summaries = await Summary.find({_id: challenge.summaries})
    }
    res.render("challenge.ejs", {challenge: challenge, summaries: summaries})
}

const putChallenge = async (req, res) => {
    const challenge = new Challenge({
        numberOfBooks: req.body.numberOfBooks,
        user: req.user._id,
    })
    const savedChallenge = await challenge.save()
    req.user.publishedChallenge = savedChallenge._id
    await req.user.save()
    res.redirect(`/challenge/${savedChallenge._id}`)
}

const editChallenge = (req, res) => {

}

const displayAllChallenges = (req, res) => {

}

const deleteChallenge = async (req, res) => {
    await Challenge.findOneAndRemove({_id: req.params.id})
    req.user.publishedChallenge = ""
    await req.user.save()
    res.redirect(`/challenge/${req.user._id}`)
}
module.exports = {
    getChallengePage,
    putChallenge,
    editChallenge, 
    displayAllChallenges,
    deleteChallenge
}