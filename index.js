const express = require("express")
const app = express()
const routes = require("./routes")

app.use("/api", routes)

app.use("*", (err, req, res, next) => {
  res.json({err})
  next()
})

app.listen("3000", (err, res) => {
  console.log("Listening to port 3000")

  if (err) {
    console.log(err)
  }
})
