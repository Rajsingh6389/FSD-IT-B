const http = require("http");
const fs = require("fs");
const path = require("path");

const myserver = http.createServer((req, res) => {

    let filePath = "";

    if (req.url === "/") {
        filePath = "index.html";
    } 
    else if (req.url === "/mobile1") {
        filePath = "mobile1.html";
    } 
    else if (req.url === "/mobile2") {
        filePath = "mobile2.html";
    } 
    else if (req.url === "/mobile3") {
        filePath = "mobile3.html";  
    } 
    else if (req.url === "/mobile4") {
        filePath = "mobile4.html";
    } 
    else {
        res.statusCode = 404;
        res.end("<h1>404 Page Not Found</h1>");
        return;
    }

    const fullPath = path.join(__dirname, filePath);

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Server Error");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });

});

myserver.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
