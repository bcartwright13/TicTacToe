// handles when a cell is clicked
const cells = document.querySelectorAll(".cell");
let player = "Player 1";
const playerDisplay = document.querySelector(".player h1");
playerDisplay.innerText = player;
let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (!cells[i].innerText && player == "Player 1") {
            cells[i].innerText = "X";
            board[Math.floor(i/3)][i%3] = 1;
            player = "Player 2";
            playerDisplay.innerText = player;
            console.log(i);
            console.log(board[0]);
            console.log(board[1]);
            console.log(board[2]);
        }else if (!cells[i].innerText && player == "Player 2"){
            cells[i].innerText = "O";
            board[Math.floor(i/3)][i%3] = 2;
            player = "Player 1";
            playerDisplay.innerText = player;
            console.log(i);
            console.log(board[0]);
            console.log(board[1]);
            console.log(board[2]);
        }
    };
}
const resetButton = document.querySelector(".resetButton");
resetButton.onclick = resetBoard;

function resetBoard(){
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        board[Math.floor(i/3)][i%3] = 0;
        player = "Player 1";
        playerDisplay.innerText = player;
    }
}

function checkWin(){

}