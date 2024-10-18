const { Schema, model, Types } = require("mongoose");

const stateModel = new Schema({
    state_name: {
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
    collection: "state"
})

module.exports = model("State", stateModel)