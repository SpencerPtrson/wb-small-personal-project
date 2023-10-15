import { useState } from 'react';
import axios from 'axios';
import "../Styles.css"
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddButton from './AddButton';
import DisplayButtons from './DisplayButtons';


const GameTable = ({ initialGameData }) => {
    const [currentGameDataState, setGameData] = useState(initialGameData);

    const SortGames = (sortParameter) => {
        let sorted = currentGameDataState;
        console.log(sortParameter); 
        sorted.sort((a, b) => {
            const aValue = a[sortParameter].toUpperCase();
            const bValue = b[sortParameter].toUpperCase();
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
            return 0;
          })
        console.log(sorted);
        setGameData(sorted);
    }

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

    const addRow = async() => {
        const response = await axios.post('/createGame', {});
        if (!response.data.error) setGameData([...currentGameDataState, response.data])
    }

    const deleteRow = async(id) => {
        const response = await axios.delete(`/deleteBoardGame/${id}`);
        if (!response.data.error) setGameData(currentGameDataState.filter(game => game.id !== id));
        else console.log(response.data.error);
    }

    // Create data row html
    const rows = currentGameDataState.map(game => {
        return <TableRow
            key={game.id}
            id={game.id}
            inEditMode={false}
            initialGameData={game}
            deleteFunction={deleteRow}
            />
    })

    // Create HTML to send back to App.jsx
    return (
        <div>
            <table>
                <thead>
                    <TableHeader sortFunction={SortGames}/>
                </thead>

                <tbody>
                    {rows}
                </tbody>
                
                <tfoot>
                    <AddButton addNewRow={addRow}/>
                </tfoot>
            </table>

            <DisplayButtons loadAllGames={DisplayAllGames} loadFavorites={DisplayFavoriteGames}/>
        </div>
    )
}

export default GameTable;