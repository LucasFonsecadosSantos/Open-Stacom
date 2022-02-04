var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://0.0.0.0:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/event/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
