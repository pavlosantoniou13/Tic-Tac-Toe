const Player = (name, symbol) => {
return{name, symbol}
}

const player1 = Player("Player X", "X")
const player2 = Player("Player O", "O")

const gameBoardObject = (() => {
    let gameBoard = []
    for (i=0; i<9; i++) {
        gameBoard.push("")
    }
    
})

const container = document.querySelector(".board");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
  
  
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.id = c 
      let symbol = document.createElement("p")
      //cell.addEventListener("mouseover", colorSquare)
      cell.style.border = "2px solid black"
      container.appendChild(cell).className = "grid-item";
      cell.appendChild(symbol).className = "symbol"
      cell.addEventListener('click',handleClick, { once: true})
    };
};
makeRows(3, 3);
let circleTurn

function handleClick(e) {
    console.log(this.id)
//placeMark
const cell = e.target
const currentPlayer =  circleTurn ? player1.symbol : player2.symbol
placeMark(cell, currentPlayer)
//Check For Win
//Check for Draw
//Switch Turns
switchTurns()
}

function switchTurns(){
    circleTurn = !circleTurn
}

function placeMark(cell, currentPlayer){
    cell.textContent = currentPlayer
   
}



