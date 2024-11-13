// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
});

// Load Players and Results based on the current page
document.addEventListener("DOMContentLoaded", function() {
    // Load players dynamically if on players.html
    if (document.getElementById("players-list")) {
        const players = ["John Doe", "Jane Smith", "Alex Johnson", "Chris Lee"];
        const playersList = document.getElementById("players-list");
        players.forEach(player => {
            const li = document.createElement("li");
            li.textContent = player;
            li.className = "player-item";
            playersList.appendChild(li);
        });
    }

    // Load results dynamically if on results.html
    if (document.getElementById("results-list")) {
        const results = [
            { match: "Team A vs Team B", score: "3-2" },
            { match: "Team C vs Team D", score: "1-1" }
        ];
        const resultsList = document.getElementById("results-list");
        results.forEach(result => {
            const li = document.createElement("li");
            li.textContent = `${result.match}: ${result.score}`;
            li.className = "result-item";
            resultsList.appendChild(li);
        });
    }
});
