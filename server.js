const http = require("http");

const path = require("path");

const mongodb = require("mongodb");

let db;
const connectionString =
 "mongodb+srv://saidovjavohir20020_db_user:saidovjavohir@cluster0.d24nmdu.mongodb.net/";

 mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
      module.exports = client;
      console.log("connection succeed");
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function() {
      console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`);

});
    }
});






