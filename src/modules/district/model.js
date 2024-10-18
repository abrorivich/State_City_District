const { Schema, model, Types } = require("mongoose");

const districtModel = new Schema({
    district_name: {
        type: String,
        required: true,
        unique: true
    },
    city: [
        {
            type: Types.ObjectId,
            ref: "City"
        }
    ]
}, {
    collection: "district"
})

module.exports = model("District", districtModel)