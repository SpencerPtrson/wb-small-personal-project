import { useState } from 'react'
import axios from 'axios'
import GameTable from './components/GameTable'
import DisplayButtons from './components/DisplayButtons'
import './App.css'

function App({ initialGameData }) {
  const [gameData, setGameData] = useState(initialGameData)
  console.log(gameData);

  const DisplayAllGames = async () => {
    console.log("DisplayAllGames activated")
    const response = await axios.get('/games');
    setGameData(response.data)
  }

  const DisplayFavoriteGames = async () => {
    console.log("DisplayFavoriteGames activated")
    const response = await axios.get('/favorites');
    setGameData(response.data)
  }
  
  return (
    <>
      <GameTable initialGameData={gameData}/>
      <DisplayButtons loadAllGames={DisplayAllGames} loadFavorites={DisplayFavoriteGames}/>
    </>
  )
}

export default App
