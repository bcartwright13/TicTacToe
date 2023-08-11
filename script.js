// handles when a cell is clicked
const cells = document.querySelectorAll(".cell");
let player = "Player 1";
const playerDisplay = document.querySelector(".player h1");
playerDisplay.innerText = player;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (!cells[i].innerText && player == "Player 1") {
            cells[i].innerText = "X";
            player = "Player 2";
            playerDisplay.innerText = player;
        }else if (!cells[i].innerText && player == "Player 2"){
            cells[i].innerText = "O";
            player = "Player 1";
            playerDisplay.innerText = player;
        }
    };
}