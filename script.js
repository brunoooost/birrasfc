// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
});

// Load Players and Results
document.addEventListener("DOMContentLoaded", function() {
    const players = ["John Doe", "Jane Smith", "Alex Johnson", "Chris Lee"];
    const results = [
        { match: "Team A vs Team B", score: "3-2" },
        { match: "Team C vs Team D", score: "1-1" }
    ];

    // Dynamically add players
    const playersList = document.getElementById("players-list");
    players.forEach(player => {
        const li = document.createElement("li");
        li.className = "player-item";
        li.textContent = player;
        playersList.appendChild(li);
    });

    // Dynamically add results
    const resultsList = document.getElementById("results-list");
    results.forEach(result => {
        const li = document.createElement("li");
        li.className = "result-item";
        li.textContent = `${result.match}: ${result.score}`;
        resultsList.appendChild(li);
    });
});
