import axios from 'axios'
import GameTable from './components/GameTable'
import DisplayButtons from './components/DisplayButtons'
import './App.css'

function App({ initialGameData }) {
  return (
    <>
      <GameTable initialGameData={initialGameData}/>
    </>
  )
}

export default App
