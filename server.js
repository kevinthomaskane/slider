var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/mobile", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/mobile.html"));
});

app.get("/css", function(req, res) {
  res.sendFile(path.join(__dirname, "./style.css"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });