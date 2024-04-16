
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function updateScore() {
    document.getElementById("score").textContent = "Score: Player " + playerScore + " - Computer " + computerScore;
}

function displayResult(result) {
    document.getElementById("result").textContent = result;
}

document.getElementById("rock").addEventListener("click", function() {
    const result = playRound("rock", computerPlay());
    displayResult(result);
    updateScore();
});

document.getElementById("paper").addEventListener("click", function() {
    const result = playRound("paper", computerPlay());
    displayResult(result);
    updateScore();
});

document.getElementById("scissors").addEventListener("click", function() {
    const result = playRound("scissors", computerPlay());
    displayResult(result);
    updateScore();
});
