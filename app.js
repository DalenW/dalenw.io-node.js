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

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/projects", function(req, res) {
    res.render("projects");
});


app.listen(8080);
console.log("Started app");