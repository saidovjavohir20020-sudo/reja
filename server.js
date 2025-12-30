console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http")
const fs = require("fs")
const path = require("path");


let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
      user = JSON.parse(data)
    }
});


// 1: kirish code
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2: session code
// 3: views code => backenda frontend ni ya`saymiz
app.set("views", "views");
app.set("view engine", "ejs");


// 4: routing code
app.post("/create-item", (req, res)=> {
    console.log(req.body);
    res.json({test: "success"});
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
})

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`);

});


// console.log("Web serverni boshlash");
// const express = require("express");
// const app = express();
// const http = require("http")

// // 1: kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// // 2: session code
// // 3: views code => backenda frontend ni ya`saymiz
// app.set("views", "views");
// app.set("view engine", "ejs");


// // 4: routing code
// app.get("/hello", function (req, res){
//     res.end(`<h1 style="background: red">hello world by Simon</h1>`);
// });

// app.get("/gift", function (req, res){
//     res.end(`<h1 style="background: red">you are gift page</h1>`);
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`the server is running successfully on port: ${PORT}`);

// });
