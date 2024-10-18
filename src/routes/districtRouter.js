const {Router} = require("express")
const districtRoute = require("../modules/district/route")

const districtRouter = Router()

districtRouter.use("/district", districtRoute)

module.exports = districtRouter