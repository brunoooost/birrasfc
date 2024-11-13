// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
}

// Load Players and Results
document.addEventListener("DOMContentLoaded", function() {
    // Dynamic loading for players
    const players = [
        "John Doe", "Jane Smith", "Alex Johnson"
    ];

    const playersList = document.getElementById("players-list");
    if (playersList) {
        players.forEach(player => {
            const li = document.createElement("li");
            li.className = "player-item";
            li.textContent = player;
            playersList.appendChild(li);
        });
    }

    // Dynamic loading for results
    const results = [
        { match: "Team A vs Team B", score: "3-2" },
        { match: "Team C vs Team D", score: "1-1" }
    ];

    const resultsList = document.getElementById("results-list");
    if (resultsList) {
        results.forEach(result => {
            const li = document.createElement("li");
            li.className = "result-item";
            li.textContent = `${result.match}: ${result.score}`;
            resultsList.appendChild(li);
        });
    }
});
