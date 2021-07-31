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
      publisherId: String,
      publisherName: String,
      img:{
        data: Buffer,
        contentType: String
      }
    },
    { timestamps: true }
)

const Summary = mongoose.model("summaries", summarySchema)
module.exports = Summary