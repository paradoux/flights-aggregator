const express = require("express")
const router = new express.Router()

const ctrlFlights = require("../controllers/flights")

router.get("/flights", ctrlFlights.flightsReadAll)

router.use("/*", (req, res) => {
  res.status(404)
  res.json({error: "API endpoint not found"})
})

module.exports = router
