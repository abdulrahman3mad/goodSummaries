const mongoose = require("mongoose")

const challengeSchema = mongoose.Schema({
    numberOfBooks: {
        type:Number,
        default:0,
        required: true
    },
    numberOfSummaries: {
        type:Number,
        default:0
    },
    startDate: {
        type:Date
    },
    endDate:{
        type:Date
    },
    user: {
        type:String,
        required:true
    },
    finished: {
        type:Boolean,
        default: false,
    },
    summaries: [String]
})

const Challenge = mongoose.model("challenges", challengeSchema)
module.exports = Challenge