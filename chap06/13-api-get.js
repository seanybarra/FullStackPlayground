const express = require('express')
const app = express()

const tours = [
    {id: 0, name: 'Hood River', price: 99.99},
    {id: 1, name: 'Oergon Coast', price: 149.95}
]

app.get('/api/tours', (req,res) => res.json(tours))

app.get('*', (req,res) => res.send('checkout <a href="/api/tours">/api/tours</a>!'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nNavigate to http://localhost:${port}/api/tours\n`))