const router = require("express").Router()
const summaryController = require("../controller/summaryController")
const upload = require("../config/multerConfig")

router.get("/summary/:id", summaryController.getSummary)
router.get("/publish", summaryController.getPublishPage)
router.post("/publish", upload.single("cover"), summaryController.publishSummary)
router.get("/edit/:id", summaryController.getEditSummaryPage)
router.post("/summary/:id", summaryController.editSummary)
router.delete("/delete/:id", summaryController.deleteSummary)

module.exports = router