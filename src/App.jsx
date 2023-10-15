import { useState } from 'react'
import axios from 'axios'
import GameTable from './components/GameTable'
import DisplayButtons from './components/DisplayButtons'
import './App.css'

function App({ initialGameData }) {
  const [gameData, setGameData] = useState(initialGameData)
  return (
    <>
      <GameTable initialGameData={gameData}/>
    </>
  )
}

export default App
