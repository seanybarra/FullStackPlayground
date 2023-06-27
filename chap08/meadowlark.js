const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
        section: function(name,options){
            if(!this._sections){
                this._sections = {}
            }
            this._section[name] = options.fn(this)
            return null
        }
    }
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))