const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

// database config
require("./src/config/repository");

//cors policy
app.use(cors())

//body parser
app.use(bodyParser.json())

// routes
app.use("/", require("./src/routes/api/short_url"))

app.get("/app", (req, res) => {
    res.send({ "status": "Server UP" })
})

app.listen(5000, () => {
    console.log("App Running...")
})

module.exports = app