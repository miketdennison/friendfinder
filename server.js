// jshint esversion:6

// DEPENDENCIES
const express = require("express");
const path = require("path");
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// PARSE
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// STATIC
app.use(express.static(__dirname + "/public/assets"));

// ROUTES
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTEN
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});