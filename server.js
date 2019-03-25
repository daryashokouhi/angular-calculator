var express = require("express");
var app = express();
const path = require('path');


 app.get("src/index", function(req, res) {
    console.log("works")
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("Server started and listening on port " + PORT + ".");
});