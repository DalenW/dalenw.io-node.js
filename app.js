var express = require("express")

var app = express();

var port = 8000;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

//------------  views  -----------
app.get("/", function(req, res) {
    console.log(`Got request for / from ${req.ip}`);
    res.render("index");
});


app.listen(port);
console.log("Started on port: " + port);