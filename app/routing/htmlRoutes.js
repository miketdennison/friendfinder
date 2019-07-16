//jshint esversion:6
const path = require("path");
var route = require('express').Router()

// ROUTES

    route.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html")); 
    });

    // Default Routing -- must occur after all other routing
    route.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });


    module.exports = route;