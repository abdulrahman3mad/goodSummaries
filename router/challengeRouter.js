const challengeController = require("../controller/challengeController")
const router = require("express").Router()

router.get("/challenge", challengeController.getChallengePage)

module.exports = router