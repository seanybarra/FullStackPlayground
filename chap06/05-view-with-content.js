const express = require('express')
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const app = express()

// The following is needed to use views
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// the following is needed for cookie support
app.use(cookieParser())