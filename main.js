let circleTurn
let remainingSpots = 9

const Player = (name, symbol) => {
    return{name, symbol}
    }
    
    const player1 = Player("Player X", "X")
    const player2 = Player("Player O", "O")
    
    const gameBoardObject = (() => {
        let gameBoard = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ]
       
       return {gameBoard}
    })();
    
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    
    const container = document.querySelector(".board");
    function makeRows(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
      
      
        for (c = 0; c < (rows * cols); c++) {
            
          let cell = document.createElement("div");
          cell.id = c 
          cell.index = c
          let symbol = document.createElement("p")
          cell.style.border = "2px solid black"
          container.appendChild(cell).className = "grid-item";
          cell.appendChild(symbol).className = "symbol"
          cell.addEventListener('click',handleClick, { once: true})
          
        }
        
        cellElements = document.querySelectorAll(".grid-item")
    };
    
    makeRows(3, 3);
    
    function handleClick(e) {
        console.log(this.index)
        //placeMark
        
        const cell = e.target
        const currentPlayer =  circleTurn ? player1.symbol : player2.symbol
        placeMark(cell, currentPlayer)
        //if(checkWin(currentPlayer)){
       //     console.log("winner")
       // }
       if (remainingSpots == 2) {
        winningMessage.textContent = "Draw"
       }

       checkDraw()
       if(checkWin(currentPlayer)){
         if(currentPlayer == player1.symbol) {
            winningMessage.textContent = "Player X Wins!"
         } else if(currentPlayer == player2.symbol) {
            winningMessage.textContent = "Player O Wins!"
         }
        }
       

        
        //Check For Win
        //Check for Draw
        
        //Switch Turns
        switchTurns()
    }
   
    function kati(){
        remainingSpots--
        console.log(remainingSpots)
    }

   function checkDraw(){
    cellElements.forEach(element => {
        element.addEventListener("click",kati)
    });
   }
   

    function switchTurns(){
        circleTurn = !circleTurn
    }
    
    function placeMark(cell, currentPlayer){
        cell.textContent = currentPlayer
        //gameBoardObject.gameBoard.push(cell.id)
        //console.log(gameBoardObject.gameBoard)
        gameBoardObject.gameBoard[cell.id]=currentPlayer;  
    }
    
    function checkWin(currentPlayer) {
        return WINNING_COMBINATIONS.some(combination => {
          return combination.every(index => {
            return gameBoardObject.gameBoard[index] == currentPlayer
          })
        })
    }
    
    const winningMessage = document.querySelector(".winning-message")