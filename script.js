// handles when a cell is clicked
const cells = document.querySelectorAll(".cell");
let player = "Player 1";
const playerDisplay = document.querySelector(".player h1");
playerDisplay.innerText = player;
let gameOver = false;
let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if(gameOver){
            return;
        }
        if (!cells[i].innerText && player == "Player 1") {
            cells[i].innerText = "X";
            board[Math.floor(i/3)][i%3] = 1;
            player = "Player 2";
            playerDisplay.innerText = player;
            checkWin();
        }else if (!cells[i].innerText && player == "Player 2"){
            cells[i].innerText = "O";
            board[Math.floor(i/3)][i%3] = 2;
            player = "Player 1";
            playerDisplay.innerText = player;
            checkWin();
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
        gameOver = false;
    }
};

function checkWin(){
    let boardFilled = true;
    //check row & coloumn win
    for(let r = 0; r < board.length; r++){
        counter1R = 0;
        counter2R = 0;
        counter1C = 0;
        counter2C = 0;
        for(let c = 0; c < board[r].length; c++){
            if(board[r][c] == 1){
                counter1R += 1;
            }else if (board[r][c] == 2){
                counter2R += 1;
            }else{
                boardFilled = false;
            }
            if(board[c][r] == 1){
                counter1C += 1;
            }else if (board[c][r] == 2){
                counter2C += 1;
            }
        }
        if(counter1R == 3 || counter1C == 3){
            playerDisplay.innerText = "Player 1 Wins!";
            gameOver = true;
            return true;
        }else if(counter2R == 3 || counter2C == 3){
            playerDisplay.innerText = "Player 2 Wins!";
            gameOver = true;
            return true;
        }
    }
    //check diagonals
    counter1L = 0;
    counter2L = 0;
    counter1R = 0;
    counter2R = 0;
    c = board.length - 1
    for(let r = 0; r < board.length; r++){
        
        console.log(c);
        if(board[r][r] == 1){
            counter1L += 1;
        }else if(board[r][r] == 2){
            counter2L += 1;
        }
        if(board[r][c] == 1){
            counter1R += 1;
        }else if(board[r][c] == 2){
            counter2R += 1;
        }
        c = c - 1;
        if(counter1L == 3 || counter1R == 3){
            playerDisplay.innerText = "Player 1 Wins!";
            gameOver = true;
            return true;
            
        }else if(counter2L == 3 || counter2R == 3){
            playerDisplay.innerText = "Player 2 Wins!";
            gameOver = true;
            return true;
        }

    }
    

    //check if board is filled to determine if draw
    if(boardFilled){
        playerDisplay.innerText = "It's a draw!";
    }
};