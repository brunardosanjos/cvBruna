var express = require('express')
const consign = require('consign')
var bodyparser = require('body-parser')
const ejs = require('ejs')

var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./public'))
app.use(bodyparser.urlencoded({extended: true}))

consign()
    .include('src/routes')
    .into(app)

module.exports = app
