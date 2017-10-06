//initialize libraries
var express = require("express");
var https = require("express-force-https");

//set the variables
var app = express();
app.use(https);

//set the app
app.set("view engine", "pug");
app.set("views", "./views");



//------------  views  -----------
app.get("/", function(req, res) {
    res.render("index");
});


app.listen(8080);
console.log("Started app");