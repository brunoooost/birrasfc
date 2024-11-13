// List of players
const players = ["John Doe", "Jane Smith", "Alex Johnson", "Emily Davis"];
const playersList = document.getElementById("players-list");

if (playersList) {
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playersList.appendChild(li);
    });
}

// List of results
const results = [
    { match: "Team A vs Team B", score: "3-2" },
    { match: "Team C vs Team D", score: "1-1" },
    { match: "Team E vs Team F", score: "0-4" }
];
const resultsList = document.getElementById("results-list");

if (resultsList) {
    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `${result.match}: ${result.score}`;
        resultsList.appendChild(li);
    });
}
