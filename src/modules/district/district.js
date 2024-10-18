const districtModel = require("./model")
const cityModel = require("../city/model")

const createDistrict = async (req, res) => {
    try {
        let { district_name, cityId } = req.body
        let cityFind = await cityModel.findById({ _id: cityId })
        if (cityFind) {
            let district = await districtModel.create({ district_name, city: cityId })
            await cityModel.updateMany({ _id: { $in: cityId } }, { $push: { district: district._id } })
            res.send({
                succes: true,
                message: "Created discrit 👌🏻",
                data: district
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

const getAllDistrict = async (req, res) => {
    try {
        let district = await districtModel.find()
        res.send({
            succes: true,
            data: district
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const updateDistrict = async (req, res) => {
    try {
        let { _id } = req.params
        const { district_name } = req.body
        let district = districtModel.findById({ _id })
        if (district) {
            await districtModel.findByIdAndUpdate(_id, { district_name })
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

const deleteDistrict = async (req, res) => {
    try {
        let { _id } = req.params
        let districtFind = await districtModel.findById({ _id })
        if (districtFind) {
            const discrit = await districtModel.findByIdAndDelete({ _id })
            await cityModel.updateMany({ _id: { $in: discrit.city } }, { $pull: { district: discrit._id } })
            res.send({
                succes: true,
                message: "Deleted 🛒"
            })
        } else {
            res.status(error.status || 400).send({
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
    createDistrict,
    getAllDistrict,
    updateDistrict,
    deleteDistrict
} 