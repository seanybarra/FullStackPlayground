const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/bad-bad-not-good', (req,res) => {
    // we're going to simulate something bad happening in our code...
    throw new Error("that didn't go well!")
})

app.get('*', (req,res) => res.render('08-click-here'))

app.use((err, req, res, next) => {
    console.error('** SERVER ERROR: ' + err.message)
    res.status(500).render('08-error', {message: "You shouldn't have clicked that!"})
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nNavigate to http://localhost:${port}\n`))