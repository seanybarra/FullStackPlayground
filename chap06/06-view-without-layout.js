const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// The following layout doesn't have a layout file, so
// views/no-layout.handlebars must include all necessary  HTML

app.get('/no-layout', (req,res) => {
    res.render('no-layout', { layout: null })
})

app.get('*', (req,res) => res.send('Checkout the "<a href="/no-layout">no layout</a> page!'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nNavigate to http://localhost:${port}/no-layout\n`))