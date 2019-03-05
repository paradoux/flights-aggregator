const axios = require("axios")

const {flightsApiKey} = require("../config")
const {csvToJSON, jsonStandardizer, priceSorter} = require("../utils")

// Api call to flights data provider
const getCompanyFlights = companyName => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://my.api.mockaroo.com/${companyName}/flights?key=${flightsApiKey}`
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        const error = new Error()
        error.message = `Can't get flights from the following provider API: ${companyName}`
        error.status = 500
        reject(error)
      })
  })
}

module.exports.flightsReadAll = async (req, res, next) => {
  try {
    // Wait for all promises to resolve
    const [airMoonData, airJazzData, airBeamData] = await Promise.all([
      getCompanyFlights("air-moon"),
      getCompanyFlights("air-jazz"),
      getCompanyFlights("air-beam")
    ])

    // Standardize the results from various providers
    const flights = [
      ...jsonStandardizer(airMoonData, "AIR_MOON"),
      ...jsonStandardizer(airJazzData, "AIR_JAZZ"),
      ...jsonStandardizer(csvToJSON(airBeamData), "AIR_BEAM")
    ]

    // Sort and send 50 results
    const sortedFlights = priceSorter(flights).slice(0, 49)
    res.status = 200
    res.json({sortedFlights})
  } catch (err) {
    // Send error to error handler middleware
    next(err)
  }
}
