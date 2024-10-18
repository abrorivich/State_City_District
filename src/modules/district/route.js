const {Router} = require("express")
const { createDistrict, getAllDistrict, updateDistrict, deleteDistrict } = require("./district")

const districtRoute = Router()

districtRoute.post("/create", createDistrict)
districtRoute.get("/getAll", getAllDistrict)
districtRoute.patch("/update/:_id", updateDistrict)
districtRoute.delete("/delete/:_id", deleteDistrict)

module.exports = districtRoute