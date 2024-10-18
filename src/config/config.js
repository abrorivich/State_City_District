const { default: mongoose } = require("mongoose")

const mongo = async() => {
    return mongoose.connect("mongodb://localhost:27017/states")
}

module.exports = mongo