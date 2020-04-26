const express = require("express")
const app = express()
const cors = require("cors")

// database config
require("./src/config/repository");

//cors policy
app.use(cors())

// routes
app.use("/shortener", require("./src/routes/api/short_url"))

app.get("/", (req, res) => {
    res.send({ "status": "Server UP" })
})

app.listen(5000, () => {
    console.log("App Running...")
})

module.exports = app