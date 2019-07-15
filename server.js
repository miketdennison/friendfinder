// jshint esversion:6

// DEPENDENCIES
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

// PORT
const port = process.env.PORT || 3000;

// PARSING
app.use(bodyParser({extended: true}));
app.use(bodyParse.json());

// START
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});