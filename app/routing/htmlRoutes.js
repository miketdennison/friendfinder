//jshint esversion:6
const path = require("path");

// ROUTES
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html")); 
    });

    // Default Routing -- must occur after all other routing
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};