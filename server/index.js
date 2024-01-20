const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3977

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})