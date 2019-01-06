const fs = require('fs');
const http = require('http');
const port = process.env.port || 3000;

// readFile();
const server = http.createServer((req,res) =>{
    fs.readFile(('.'+req.url), 'utf8', function (err,data) {
        if (err) res.statusCode = 403;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        requesturl = req.url;
        res.write (data)
        res.end();
    });
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});

//function readFile(filename) {
//    console.log(`Filename: ${filename}`)
//    return fs.readFileSync(("."+filename), 'utf8');
//}
