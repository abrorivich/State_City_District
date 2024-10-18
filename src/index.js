const express = require("express")
const dotenv = require("dotenv/config")
const mongo = require("./config/config")
const stateRouter = require("./routes/stateRouter")
const cityRouter = require("./routes/cityRouter")
const districtRouter = require("./routes/districtRouter")

const app = express()

const PORT = process.env.PORT || 7070

app.use(express.json())
app.use(stateRouter)
app.use(cityRouter)
app.use(districtRouter)

mongo()
    .then(()=> console.log("Connect"))
    .catch((error) => console.log(error))

app.listen(PORT, console.log(PORT))