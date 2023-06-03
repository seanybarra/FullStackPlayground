const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase 
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain' })
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<h1>About</h1>')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain' })
            res.end('It\'ll be ok love, I love you baby');
            break
    }
})

server.listen(port, () => console.log(`Server started on port ${port}; ` +
'press Ctrl-C to terminate...'))