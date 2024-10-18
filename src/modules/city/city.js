const cityModel = require("./model")
const stateModel = require("../state/model")

const createCity = async (req, res) => {
    try {
        let { city_name, stateId } = req.body
        let stateFind =  await stateModel.findById({ _id: stateId })
        if (stateFind) {
            let cites = await cityModel.create({ city_name, state: stateId })
            await stateModel.updateMany({ _id: { $in: stateId } }, { $push: { city: cites._id } })
            res.send({
                succes: true,
                message: "Created city 👌🏻",
                data: cites
            })
        } else {
            res.status(error.status || 404).send({
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

const getAllCity = async (req, res) => {
    try {
        let cities = await cityModel.find().populate("district")
        res.send({
            succes: true,
            data: cities
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const updateCity = async (req, res) => {
    try {
        let { _id } = req.params
        const { city_name } = req.body
        let city = cityModel.findById({ _id })
        if (city) {
            await cityModel.findByIdAndUpdate(_id, { city_name })
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

const deleteCity = async (req, res) => {
    try {
        let { _id } = req.params
        const cityFind = await cityModel.findById({ _id })
        if (cityFind) {
            let city = await cityModel.findByIdAndDelete({ _id })
            await stateModel.updateMany({ _id: { $in: city.state } }, { $pull: { city: city._id } })
            res.send({
                succes: true,
                message: "Deleted 🛒"
            })
        } else {
            res.status(error.status || 404).send({
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

module.exports = {
    createCity,
    getAllCity,
    updateCity,
    deleteCity
} 