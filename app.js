/**
    Name: Kasonde Besa
    Script: app.js
    Description: Application that uses the game logic for simple WebApp of Tic-Tac-Toe
    Date: October 19th, 2023
**/

// Get dynamic components of the container

let userText = document.getElementById("userText");
let restartBtn = document.getElementById("restartButton");
let gameCells = Array.from(document.getElementsByClassName("cell"));
let winnerCells = getComputedStyle(document.body).getPropertyValue("--winnerCells");

// Variables used to fill cells and keep track of filled cells.
const LETTER_O = "O";
const LETTER_X = "X";
let currPlayer = LETTER_X; // Game starts with X
let filledCell = Array(9).fill(null);
let done = false;
let count = 0;
/* Functions that add functionality to the gameboard. */

// Starts game by making gameboard clickable.
const startGame = () => {
    gameCells.forEach(cell => cell.addEventListener('click', clickedACell));
}

// Fills cell with letter 'X' or 'O', doesn't change already filled cell.
function clickedACell(event) {
    const id = event.target.id;
    if (!filledCell[id] && done == false) {
        filledCell[id] = currPlayer;
        event.target.innerText = currPlayer;

        if (userHasWon() != false) {
            userText.innerText = `${currPlayer} wins!!!`;
            let winningCells = userHasWon();
            winningCells.map(cell => gameCells[cell].style.backgroundColor = winnerCells);
            done = true;

        }
        count++;
        currPlayer = currPlayer == LETTER_X ? LETTER_O : LETTER_X;
    }
    if (count == 9 && done == false) {
        userText.innerText = "Draw..."
        gameCells.forEach(cell => cell.style.backgroundColor = "red");
    }

}

// Figures out whether the current user has won

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function userHasWon() {
    for (const winCondition of winCombinations) {
        let [x, y, z] = winCondition;
        if (filledCell[x] && (filledCell[x] == filledCell[y] && filledCell[x] == filledCell[z])) {
            return [x, y, z];
        }
    }
    return false;
}

// Restart the game by emptying the cells, and resetting filledCell array.
restartBtn.addEventListener('click', restartGame);

function restartGame() {
    currPlayer = LETTER_X; // Game always starts with 'X' for first player.
    userText.innerText = "Tic Tac Toe"
    gameCells.forEach(cell => {
        cell.innerText = ""; // Empty each cell.
        cell.style.backgroundColor = '' // Reset winning cells' background color
    })
    filledCell.fill(null);
    count = 0;
    done = false;

}
startGame();