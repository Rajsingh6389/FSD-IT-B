// const http = require("http");

// const myserver = http.createServer((req, res) => {
//   console.log("server1");

//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>ABES</title>
//         </head>
//         <style>
//          .abes {
//   height: 300px;
//   width: 300px;
//   border: 4px solid black;
//   border-radius: 24px;
//   border-color:red;
// }

//         </style>
//         <body>
//           <h1>ABES Engineering College</h1>
//           <img 
//             src="https://tse1.mm.bing.net/th/id/OIP.Z4h53-L1wno-wPHjA-BrFwHaEg?pid=Api&P=0&h=180"
//             alt="ABES Image"
//             class="abes"
//           />
//         </body>
//       </html>
//     `);
//   }
//   else if (req.url === "/about" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>About Page</h1>");
//   }
//   else if (req.url === "/contact" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Contact Page</h1>");
//   }
//   else if (req.url === "/class" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Class Page</h1>");
//   }
//   else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("<h1>404 - Page Not Found</h1>");
//   }
// });

// myserver.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

const fs=require('fs')
// fs.writeFileSync("./abes.text","we are student of abes")
// const result=fs.readFileSync("./abes.text","utf8")
// console.log(result);

// fs.appendFileSync("./ad.txt",`and i am monotonous`)
// fs.writeFile("./a1.txt","hello everyone",()=>{});
// fs.writeFile("./a2.text","",()=>{})
// fs.cp("./a1.txt","./a2.txt",()=>{})

// fs.unlinkSync("./abes.text")

// fs.mkdir("node_js/class.txt",(err)=>{
//    if(err) throw err
//    console.log("folder created successfully");
    
// })


// fs.readdir('node_js/class.txt', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

// fs.appendFile("node_js/class.txt/11-02-2006.txt","\nhello world",(err)=>{
//     if(err) throw err
//     console.log("data appended successfully");
// })
// const newUser = {
//     id: 4,
//     name: "c",
//     role: "Frontend Developer"
// };
// fs.readFile('node_js/data.json', 'utf8', (err, data) => {
//     if (err) throw err;

//     const users = JSON.parse(data);   // string → object
//     console.log(users);
//     users.push(newUser)
//     fs.writeFile("node_js/data.json",JSON.stringify(users),(err)=>{
//         if(err) throw err
//         console.log("User added");
//     })
// });
// const os=require('os')
// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.arch());
// console.log("freemem" , os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.homedir());


const http = require("http");

const home = fs.readFileSync("C:/FSD/IT_B-Full-Stack-Development/node_js/abes.html");

const myserver = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(home);
});

myserver.listen(8000, () => {
  console.log("Server running on port 8000");
});
