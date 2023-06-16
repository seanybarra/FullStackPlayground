const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// Set up the view handlebar engine for app
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine','handlebars')

// See views/custom-layout.handlebars for the contents, and 
// views/layouts/custom.handlebars for the layout
app.get('/custom-layout', (req,res) => {
    res.render('custom-layout', {layout: 'custom'})
})

app.get('*', (req,res) => res.send('Checkout the "<a href="/custom-layout">custom layout</a> page!'))

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`\nNavigate to http://localhost:${port}/custom-layout\n`))