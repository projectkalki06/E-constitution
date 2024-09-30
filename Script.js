
// Function to toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Modal Control Functions
function openBreakdown() {
    document.getElementById("breakdownModal").style.display = "block";
}

function closeBreakdown() {
    document.getElementById("breakdownModal").style.display = "none";
}

function openQuiz() {
    document.getElementById("quizModal").style.display = "block";
}

function closeQuiz() {
    document.getElementById("quizModal").style.display = "none";
    document.getElementById("quizResult").innerText = "";
}

function openGame() {
    document.getElementById("gameModal").style.display = "block";
}

function closeGame() {
    document.getElementById("gameModal").style.display = "none";
    document.getElementById("gameResult").innerText = "";
}

function openLeaderboard() {
    document.getElementById("leaderboardModal").style.display = "block";
    // Show celebration banner based on score
    const celebrationBanner = document.getElementById("celebrationBanner");
    celebrationBanner.innerText = "Congratulations! You've reached the leaderboard!";
    celebrationBanner.style.display = "block";
}

function closeLeaderboard() {
    document.getElementById("leaderboardModal").style.display = "none";
    document.getElementById("celebrationBanner").style.display = "none";
}

// Accordion Function
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Quiz Answer Check
function checkAnswer(answer) {
    const result = document.getElementById("quizResult");
    if (answer === 'B') {
        result.innerText = "Correct! Dr. B.R. Ambedkar is known as the Father of the Indian Constitution.";
    } else {
        result.innerText = "Incorrect. Please try again.";
    }
}

// Game Answer Check
function checkGameAnswer(answer) {
    const result = document.getElementById("gameResult");
    if (answer === 'A') {
        result.innerText = "Correct! Article 14 relates to the Right to Equality.";
    } else {
        result.innerText = "Incorrect. Please try again.";
    }
}

// Close Modals on Outside Click
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeBreakdown();
        closeQuiz();
        closeGame();
        closeLeaderboard();
    }
}
