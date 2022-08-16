const http = require("http");
const fs = require('fs');


function readFile(filename) {
    try {
        const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
  return data
}



const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req,res) => {
    const URL = req.url.slice(1,)
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    if (URL === "" || URL === "home"){
        res.end(fs.readFileSync('./home.html', 'utf8'))
        res.setHeader("Content-type", "stylesheet")
        res.end(fs.readFileSync('./style.css', 'utf8'))
    }else if (URL === "about"){
        res.end(fs.readFileSync(`./${URL}.html`, 'utf8'))
    }else if (URL === "contact-me"){
        res.end(fs.readFileSync(`./${URL}.html`, 'utf8'))
    }else{
        res.end(fs.readFileSync('./404.html', 'utf8'))
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

