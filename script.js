// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
}

// Players list
const players = ["Victor Valero", "Juanse Garcia", "Andreu Belon"];
const playersList = document.getElementById("players-list");

if (playersList) {
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playersList.appendChild(li);
    });
}

// Results list
const results = [
    { match: "Team A vs Team B", score: "3-2" },
    { match: "Team C vs Team D", score: "1-1" }
];
const resultsList = document.getElementById("results-list");

if (resultsList) {
    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `${result.match}: ${result.score}`;
        resultsList.appendChild(li);
    });
}
