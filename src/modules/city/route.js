const {Router} = require("express")
const { createCity, getAllCity, deleteCity, updateCity } = require("./city")

const cityRoute = Router()

cityRoute.post("/create", createCity)
cityRoute.get("/getAll", getAllCity)
cityRoute.patch("/update/:_id", updateCity)
cityRoute.delete("/delete/:_id", deleteCity)

module.exports = cityRoute