const router = require("express").Router()
const summaryController = require("../controller/summaryController")

router.get("/summary/:id", summaryController.getSummary)
router.get("/publish", summaryController.getPublishPage)
router.post("/publish", summaryController.publishSummary)
router.get("/edit/:id", summaryController.getEditSummaryPage)
router.post("/summary/:id", summaryController.editSummary)
router.delete("/delete/:id", summaryController.deleteSummary)

module.exports = router