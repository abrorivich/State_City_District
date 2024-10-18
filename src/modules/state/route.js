const {Router} = require("express")
const { createState, getAllState, deleteState, updateState } = require("../state/state")

const stateRoute = Router()

stateRoute.post("/create", createState)
stateRoute.get("/getAll", getAllState)
stateRoute.patch("/update/:_id", updateState)
stateRoute.delete("/delete/:_id", deleteState)

module.exports = stateRoute