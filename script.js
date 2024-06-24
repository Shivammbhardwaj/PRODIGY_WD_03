let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

function handleClick(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    cells[cellIndex].innerText = currentPlayer;
    cells[cellIndex].style.backgroundColor = currentPlayer === 'X' ? '#f06292' : '#64b5f6'; // Pink & Blue
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
}

function checkResult() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            cells[a].style.backgroundColor = cells[b].style.backgroundColor = cells[c].style.backgroundColor = '#81c784'; // Light Green
            statusDisplay.innerText = `Player ${board[a]} wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        statusDisplay.innerText = "It's a draw!";
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#cfd8dc'; // Blue Grey 200
    });
}
