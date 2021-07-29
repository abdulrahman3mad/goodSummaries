const Challenge = require("../model/challenge")
const User = require("../model/user")
const Summary = require("../model/summary")

const getChallengePage = (req, res) => {
    const challenge = Challenge.findOne()
    res.render("challenge", {challenge: challenge})
}

const putChallenge = (req, res) => {

}

const editChallenge = (req, res) => {

}

const displayAllChallenges = (req, res) => {

}

module.exports = {
    putChallenge,
    editChallenge, 
    displayAllChallenges
}