// Module Pattern to make gameBoard
let gameBoard = (function() {
    const cellElements = document.querySelectorAll('[data-cell]');
    const message = document.querySelector('.message');
    const X_CLASS = 'x';
    const O_CLASS = 'o';
    let circleTurn;
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
    
    const startGame = () => {
        circleTurn = false;
        if (gameOver) {
            gameOver = !gameOver;
        }
        cellElements.forEach(cell => {
            cell.classList.remove(X_CLASS);
            cell.classList.remove(O_CLASS);

            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once : true });
            message.innerText = "Player X's Turn";
        })
    }

    const swapTurns = () => {
        circleTurn = !circleTurn;
    }

    const placeMark = (currentCell, currentClass) => {
        currentCell.classList.add(currentClass);
    }

    const changeMessage = (currentClass) => {
        // (currentMarker == 'x') ? message.innerText = "Player X's Turn" : message.innerText = "Player O's Turn";
        (currentClass == 'x') ? message.innerText = "Player O's Turn" : message.innerText = "Player X's Turn";

    }

    const checkWin = (currentClass) => {
        return WinningCombinations.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            })
        })
    }

    const isDraw = () => {
        return [...cellElements].every(cell => {
            return cell.classList.contains('x') || cell.classList.contains('o');
        })
    }

    const endGame = (draw, currentClass) => {
        if (draw) {
            message.innerText = "It's a draw!";
            gameOver = !gameOver;
        } else {
            message.innerText = `Player ${currentClass.toUpperCase()} has won!`;
            gameOver = !gameOver;
        }
    }

    const handleClick = (e) => {
        const currentCell = e.target;
        const currentClass = circleTurn ? O_CLASS : X_CLASS;

        if (gameOver) return;

        placeMark(currentCell, currentClass);

        if (checkWin(currentClass)) {
            endGame(false, currentClass);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            changeMessage(currentClass);
        }
    }

    return {handleClick, startGame}

})();

gameBoard.startGame();

// Add EventListener to restartButton
const restartButton = document.querySelector('.btn');

restartButton.addEventListener('click', gameBoard.startGame);