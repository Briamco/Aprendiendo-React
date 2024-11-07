import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkEndGame, checkWinnerFrom } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"


function App() {
  const [board, setBoard] = useState(Array(16).fill(null))
  const [turn, setTurn] = useState(TURNS.red)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(16).fill(null))
    setTurn(TURNS.red)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.red ? TURNS.yellow : TURNS.red
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if  (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1 className='mb-16 text-4xl font-bold'>Connect 4</h1>
      <section className="grid grid-cols-4 gap-2">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )  
        })
        }
      </section>

      <section className="flex justify-center my-[15px] mx-auto w-fit relative rounded-lg turn">
        <Square isSelected={turn === TURNS.red}>
          {TURNS.red}
        </Square>
        <Square isSelected={turn === TURNS.yellow}>
          {TURNS.yellow}
        </Square>
      </section>

      <button onClick={resetGame}>Reinciar el juego</button>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
