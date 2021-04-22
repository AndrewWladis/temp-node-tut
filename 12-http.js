const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('hello world')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    <img src='https://static.tvtropes.org/pmwiki/pub/images/rsz_s07e14_268.png'>
    `)
});

server.listen(5000)