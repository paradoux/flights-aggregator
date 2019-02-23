module.exports.csvToJSON = csvData => {
  const csv = csvData.split("\n")
  const data = []
  const headersRow = csv.splice(0, 1)
  const headers = headersRow[0].split(",")
  csv.forEach(row => {
    // For each row of the csv, create a json object with corresponding key/values
    const values = row.split(",")
    let json = {}
    for (var i = 0; i < headers.length; i++) {
      json[headers[i]] = values[i]
    }
    data.push(json)
  })

  return data
}

module.exports.jsonStandardizer = (jsonsArray, provider) => {
  // Create a new json with the same key names for every json received
  return jsonsArray.map(json => {
    const keys = Object.keys(json)
    return {
      provider,
      id: json[keys[0]],
      price: json[keys[1]],
      departure_time: json[keys[2]],
      arrival_time: json[keys[3]]
    }
  })
}

module.exports.priceSorter = list => {
  // Create a new list of flights sorted by price
  const flights = [...list]
  return flights.sort((flighta, flightb) => {
    return parseFloat(flightb.price) - parseFloat(flighta.price)
  })
}
