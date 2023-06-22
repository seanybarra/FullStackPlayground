const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
        section: function(name,options){
            if(!this._sections){
                this._sections = {}
            }
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'handlebars')
const port = process.env.PORT || 3000

app.get('/section-test', (req,res) => res.render('section-test'))

app.listen(port, () => console.log(`Express started on http://localhost:${port}` + '; press Ctrl-C to terminate'))