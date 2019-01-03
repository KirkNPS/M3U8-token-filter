const http = require('http');
const port = process.env.port || 3000;

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    requesturl = req.url;
    res.end(`Hello World!${requesturl}`);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});