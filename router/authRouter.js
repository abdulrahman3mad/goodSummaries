const router = require("express").Router()
const authController = require("../controller/authController")

router.get("/login", authController.getLoginPage)
router.get("/signup", authController.getSignUpPage)
router.post("/login", authController.login)
router.post("/signup", authController.signUp)
router.post("/logout", authController.logout)

module.exports = router