import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>App Gatitos</h1>

      <button onClick={refreshFact}>Get new fact</button>
      
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word from ${fact}`} />}
    </main>
  )
}