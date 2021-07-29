const router = require("express").Router()
const userController = require("../controller/userController")

router.get("/profile/:id", userController.getProfilePage)
router.get("/editProfile", userController.getEditProfilePage)
router.put("/profile", userController.editData)

module.exports = router