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

// Variables used to fill cells and keep track of filled cells.
const LETTER_O = "O";
const LETTER_X = "X";
let currPlayer = LETTER_X; // Game starts with X

let filledCell = Array(9).fill(null);

/* Functions that add functionality to the gameboard. */

// Starts game by making gameboard clickable.
const startGame = () => {
    gameCells.forEach(cell => cell.addEventListener('click', clickedACell));
}

// Fills cell with letter 'X' or 'O', doesn't change already filled cell.
function clickedACell(event) {
    const id = event.target.id;
    if (!filledCell[id]) {
        filledCell[id] = currPlayer;
        event.target.innerText = currPlayer;
    }
}

startGame();