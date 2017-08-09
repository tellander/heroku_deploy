var express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(80, function() {
    console.log("Web server is running...");
});