const challengeController = require("../controller/challengeController")
const router = require("express").Router()

router.get("/challenge/:id", challengeController.getChallengePage)
router.delete("/challenge/delete/:id", challengeController.deleteChallenge)
router.post("/challenge", challengeController.putChallenge)

module.exports = router