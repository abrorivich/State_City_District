const { Schema, model, Types } = require("mongoose");

const cityModel = new Schema({
    city_name: {
        type: String,
        required: true,
        unique: true
    },

    state: [
        {
            type: Types.ObjectId,
            ref: "State"
        }
    ],

    district: [
        {
            type: Types.ObjectId,
            ref: "District"
        }
    ]
}, {
    collection: "city"
})

module.exports = model("City", cityModel)