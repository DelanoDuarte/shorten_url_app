const express = require("express")
const router = express.Router()

const shortUrlService = require("../../services/url_shortener_service")

router.post("/short", (req, res) => {
    const body_content = { ...req.body }
    shortUrlService.short(body_content.url)
        .then(data => {
            res.status(201)
            res.json({ "short_url": "http://localhost:5000/shortener/" + data.short_url, "long_url": data.long_url })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "Something bad happened" })
        })
})


router.get("/:short_url", (req, res) => {
    const code = req.params.short_url
    shortUrlService.find_by_short_url(code)
        .then(data => {
            res.redirect(301, data.long_url)
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "Something bad happened" })
        })
})


module.exports = router;