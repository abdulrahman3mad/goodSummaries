const router = require("express").Router()
const userController = require("../controller/userController")
const upload = require("../config/multerConfig")


router.get("/profile/:id", userController.getProfilePage)
router.get("/editProfile", userController.getEditProfilePage)
router.post("/profile", upload.single("avatar"), userController.editData)

module.exports = router