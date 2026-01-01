console.log("Web serverni boshlash");
const express = require("express");
const app = express();



// MongoDB connection
const db = require("./server").db();

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
    // console.log(req.body);
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    
    db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{
      console.log(data.ops);
      res.json(data.ops[0]);
    })
});

app.get('/author', (req, res) => {
  console.log("user entered /");
    res.render("author", {user: user});
})

app.get("/", function (req, res) {
  db.collection("plans").find().toArray ((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("reja", {items: data});;
    }
  });
 
});

module.exports = app;




