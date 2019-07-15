// jshint esversion:6
var friends = require("../data/friends");

// ROUTES
module.exports = function (app) {
    // Send friends in JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Calculate best friend, then add user to DB
    app.post("/api/friends", function (req, res) {
        // Retrive user input
        var newPerson = req.body;

        // Convert the added scores to numbers
        for (var i = 0; i < newPerson.scores.length; i++) {
            newPerson.scores[i] = Number(newPerson.scores[i]);
        }

        var index = 0; // Stores the index of the best match
        var maxDiff = 40; // (Max Score Per Q (5) - Min Score Per Q (1)) * Num of Questions (10)

        // Iterate through all the friends in the database along with their scores to find best match
        for (var j = 0; j < friends.length; j++) {
            var total = 0;
            for (var k = 0; k < friends[j].scores.length; k++) {
                var difference = Math.abs(newPerson.scores[k] - friends[j].scores[k]);
                total += difference;
                
            }

            // If the current total is less than the current maximum difference, then set new best match
            if (total < maxDiff) {
                index = j;
                maxDiff = total;
            }
        }

        // Add best friend to array and display best friend as JSON
        friends.push(newPerson);
        res.json(friends[index]);
    });
};