const stateModel = require("./model")

const createState = async (req, res) => {
    try {
        let { state_name } = req.body
        let state = await stateModel.create({ state_name })
        res.send({
            succes: true,
            message: "Created state 👌🏻",
            data: state
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const getAllState = async (req, res) => {
    try {
        let state = await (await stateModel.find().populate({
            path: "city",
            populate: {
                path: "district",
            }
        }))
        res.send({
            succes: true,
            data: state
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const updateState = async (req, res) => {
    try {
        let { _id } = req.params
        const { state_name } = req.body
        let state = stateModel.findById({ _id })
        if (state) {
            await stateModel.findByIdAndUpdate(_id, { state_name })
            res.status(200).send({
                succes: true,
                message: "updated 👌🏻"
            })
        } else {
            res.status(404).send({
                succes: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })

    }
}

const deleteState = async (req, res) => {
    try {
        let { _id } = req.params
        let state = stateModel.findById(_id)
        if (state) {
            await stateModel.findByIdAndDelete(_id)
            res.status(200).send({
                succes: true,
                message: "Deleted 🛒"
            })
        } else {
            res.status(404).send({
                succes: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(400).send({
            succes: false,
            message: error.message
        })
    }
}

module.exports = {
    createState,
    getAllState,
    updateState,
    deleteState
} 