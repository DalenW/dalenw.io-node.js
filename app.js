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


//certs stuff
app.get("/.well-known/acme-challenge/jY0MLFQ5sUuXE1cd17G1mrina5w6b1OkjuKNQVARXqA", function(req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write("jY0MLFQ5sUuXE1cd17G1mrina5w6b1OkjuKNQVARXqA.MAsW9dYlCZ_d8NnS_Hc7GgvR-Tcd09iBz0huGctTRCE");
});

app.get("/.well-known/acme-challenge/Lf0HwI42XwQun4emQbhRctCnkmdIZyPYGkiq6cMqjJU", function(req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write("Lf0HwI42XwQun4emQbhRctCnkmdIZyPYGkiq6cMqjJU.MAsW9dYlCZ_d8NnS_Hc7GgvR-Tcd09iBz0huGctTRCE");
});

app.listen(8080);
console.log("Started app");