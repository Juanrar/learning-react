import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) =>{
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () =>{
    updateBoard(index)
  }
  
  return( 
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  //Vertical
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //Diagonal
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoardState] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoardState(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if(board[index] || winner){
      return
    }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoardState(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
     <h1>Tic Tac Toe</h1>
     <section className='game'>
       {
         board.map((_, index) => {
           return(
             <Square
               key={index}
               index={index}
               updateBoard={updateBoard}
             >
               {board[index]}
             </Square>
           )
         })
       }
     </section>

     <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
     </section>
     
     {
      winner !== null && (
        <section className = "winner">
          <div className="text">
            <h2>
              {winner === false ? 'Empate' : `El ganador es ${winner}`}
            </h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )
     }
    </main>
   )
 }

export default App
