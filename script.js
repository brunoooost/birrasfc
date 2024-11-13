// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// List of upcoming matches
const matches = [
    { opponent: "Team A", date: "Nov 20, 2024" },
    { opponent: "Team B", date: "Dec 5, 2024" },
    { opponent: "Team C", date: "Jan 10, 2025" }
];

const matchesList = document.getElementById("upcoming-matches");

if (matchesList) {
    matches.forEach(match => {
        const li = document.createElement("li");
        li.textContent = `${match.opponent} - ${match.date}`;
        matchesList.appendChild(li);
    });
}
