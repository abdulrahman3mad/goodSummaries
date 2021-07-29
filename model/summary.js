const mongoose = require("mongoose")
const summarySchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      publisher: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
)

const Summary = mongoose.model("summaries", summarySchema)
module.exports = Summary