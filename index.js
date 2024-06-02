<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Sports Day</title>
</head>
<body>
    <h1>School Sports Day</h1>
    <p>Open the console to see the progress of the sports day events.</p>
    <button onclick="startSportsDay()">Start Sports Day</button>

    <script>
        // Starting score object
        let scores = { red: 0, blue: 0, green: 0, yellow: 0 };

        function OpeningCeremony(callback) {
            console.log("Let the games begin");
            setTimeout(() => {
                console.log("Opening Ceremony - Initial Scores:", scores);
                callback(scores, Race100M);
            }, 1000);
        }

        function Race100M(scores, callback) {
            setTimeout(() => {
                console.log("Race 100M - Previous Scores:", scores);
                
                let times = {
                    red: Math.floor(Math.random() * 6) + 10,
                    blue: Math.floor(Math.random() * 6) + 10,
                    green: Math.floor(Math.random() * 6) + 10,
                    yellow: Math.floor(Math.random() * 6) + 10
                };

                let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
                scores[sortedTimes[0][0]] += 50;
                scores[sortedTimes[1][0]] += 25;

                console.log("Race 100M Results:", times);
                console.log("Race 100M - Updated Scores:", scores);
                
                callback(scores, LongJump);
            }, 3000);
        }

        function LongJump(scores, callback) {
            setTimeout(() => {
                console.log("Long Jump - Previous Scores:", scores);

                let colors = ["red", "blue", "green", "yellow"];
                let winner = colors[Math.floor(Math.random() * colors.length)];
                scores[winner] += 150;

                console.log(`Long Jump - ${winner} won`);
                console.log("Long Jump - Updated Scores:", scores);
                
                callback(scores, HighJump);
            }, 2000);
        }

        function HighJump(scores, callback) {
            setTimeout(() => {
                console.log("High Jump - Previous Scores:", scores);

                let color = prompt("Which colour secured the highest jump (red, yellow, blue, green)?");

                if (color && scores.hasOwnProperty(color.toLowerCase())) {
                    scores[color.toLowerCase()] += 100;
                    console.log(`High Jump - ${color} won`);
                } else {
                    console.log("Event was cancelled");
                }

                console.log("High Jump - Updated Scores:", scores);
                
                callback(scores);
            }, 1000);
        }

        function AwardCeremony(scores) {
            console.log("Award Ceremony - Final Scores:", scores);

            let sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
            console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
            console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
            console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
        }

        function startSportsDay() {
            // Start the sports day
            OpeningCeremony(Race100M);
        }
    </script>
</body>
</html>
