console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http")

// 1: kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2: session code
// 3: views code => backenda frontend ni ya`saymiz
app.set("views", "views");
app.set("view engine", "ejs");


// 4: routing code
app.get("/hello", function (req, res){
    res.end(`<h1 style="background: red">hello world by Simon</h1>`);
});

app.get("/gift", function (req, res){
    res.end(`<h1 style="background: red">you are gift page</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`the server is running successfully on port: ${PORT}`);

});
