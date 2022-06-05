const cellElements = document.querySelectorAll('[data-cell]');
const restartButton = document.querySelector('.btn');

// Factory Function to make Player
const Player = (marker) => {
    const getMarker = () => marker;
    return {getMarker};
}

// Initialize two players
const PlayerX = Player('x');
const PlayerO = Player('o');

// Module Pattern to make gameBoard
let gameBoard = (function(player1, player2) {
    let currentMarker = player1.getMarker();
    const message = document.querySelector('.message');
    let gameOver;
    const WinningCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const swapTurns = () => {
        if (currentMarker == player1.getMarker()) {
            currentMarker = player2.getMarker();
        } else {
            currentMarker = player1.getMarker();
        }
    }

    const placeMark = (cell) => {
        cell.classList.add(currentMarker);
    }

    const changeMessage = (message) => {
        (currentMarker == 'x') ? message.innerText = "Player X's Turn" : message.innerText = "Player O's Turn";
    }

    const checkWin = (currentMarker) => {
        return WinningCombinations.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentMarker);
            })
        })
    }

    const isDraw = () => {
        return [...cellElements].every(cell => {
            return cell.classList.contains('x') || cell.classList.contains('o');
        })
    }

    const endGame = (draw) => {
        if (draw) {
            message.innerText = "It's a draw!";
            gameOver = !gameOver;
        } else {
            message.innerText = `Player ${currentMarker.toUpperCase()} has won!`;
            gameOver = !gameOver;
        }
    }

    const handleClick = (e) => {
        const currentCell = e.target;

        if (gameOver) return;

        placeMark(currentCell);

        if (checkWin(currentMarker)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            changeMessage(message);
        }
    }

    return {handleClick}

})(PlayerX, PlayerO);

// Add EventListener to each squares 
cellElements.forEach(cell => {
    cell.addEventListener('click', (e) => {
        gameBoard.handleClick(e);
    }, { once : true })
})