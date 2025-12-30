console.log("Web serverni boshlash");
const express = require("express");
const app = express();



// MongoDB connection
const db = require("./server").db();
// const connectionString =
// "mongodb+srv://saidovjavohir20020_db_user:zGdfw5094vKR3INg@cluster0.pv0vteo.mongodb.net/";

// 1: kirish code
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2: session code
// 3: views code => backenda frontend ni ya`saymiz
app.set("views", "views");
app.set("view engine", "ejs");
const fs = require("fs")
const path = require("path");

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

module.exports = app;




