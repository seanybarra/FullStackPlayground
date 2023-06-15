const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.get('/headers', (req,res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers).map(([key,value]) => `${key}: ${value}`)
    res.send(headers.join('\n'))
})

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`\nNavigate to http://localhost:${port}/headers\n`))