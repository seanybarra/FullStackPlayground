const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// Configure Handlebars vuew engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')