const router = require("express").Router()
const userController = require("../controller/userController")

router.get("/profile/:id", userController.getProfilePage)
router.get("/edit/:id", userController.getEditProfilePage)
router.put("/profile/:id", userController.editData)

module.exports = router