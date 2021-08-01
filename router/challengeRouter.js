const challengeController = require("../controller/challengeController")
const router = require("express").Router()

router.get("/challenge/:id", challengeController.getChallengePage)
router.post("/challenge", challengeController.putChallenge)

module.exports = router