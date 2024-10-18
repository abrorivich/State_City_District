const {Router} = require("express")
const stateRoute = require("../modules/state/route")

const stateRouter = Router()

stateRouter.use("/state", stateRoute)

module.exports = stateRouter