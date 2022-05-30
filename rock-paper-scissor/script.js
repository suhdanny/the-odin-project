const cards = document.querySelectorAll('.card');
const scorePlayer = document.querySelector('.player');
const scoreComputer = document.querySelector('.computer');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) return;
        playSingleRound(card.classList[1], computerPlay());
        updateBoard();
    })
})

function computerPlay() {
    const myArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        message.textContent = `Both players selected ${playerSelection}. It's a tie!`;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            message.textContent = "You win! Rock beats Scissors.";
        } else {
            message.textContent = "You lose! Paper beats Rock.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            message.textContent = "You win! Paper beats Rock.";
        } else {
            message.textContent = "You lose! Scissors beat Paper.";
        }
    } else {
        if (computerSelection == 'paper') {
            message.textContent = "You win! Scissors beat Paper.";
        } else {
            message.textContent = "You lose! Rock beats Scissors.";
        }
    }
}

function updateBoard() {
    if (message.textContent.includes("win")) {
        playerScore++;
        scorePlayer.textContent = playerScore;
        if (playerScore == 5) {
            message.textContent = "The winner is the Player!";
        }
    } else if (message.textContent.includes("lose")) {
        computerScore++;
        scoreComputer.textContent = computerScore;
        if (computerScore == 5) {
            message.textContent = "The winner is the Computer!"
        }
    }
}