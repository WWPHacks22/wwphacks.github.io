var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + "/views/";

app.use("/", router);

router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    res.sendFile(path + "home.html");
});

app.use(express.static(__dirname + '/static'));

app.use("*", function(req, res) {
    res.send("Error 404: Not Found!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});