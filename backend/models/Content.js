import mongoose from "mongoose"

const contentSchema = new mongoose.Schema({

    section: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        required: true

    }

})

const Content = mongoose.model("Content", contentSchema)

export default Content