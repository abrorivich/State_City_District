const {Router} = require("express")
const cityRoute = require("../modules/city/route")

const cityRouter = Router()

cityRouter.use("/city", cityRoute)

module.exports = cityRouter