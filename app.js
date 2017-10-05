//initialize libraries
var express = require("express");

//set the variables
var app = express();

//set the app
app.set("view engine", "pug");
app.set("views", "./views");



//------------  views  -----------
app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3000);
console.log("Started app");