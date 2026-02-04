const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log('server1');
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
      } 
      if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
      } 
    // res.end('hii this is my first node server')
})
myserver.listen(8000,()=>{
    console.log("server is running");
})


