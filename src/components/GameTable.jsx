import { useState } from 'react';
import axios from 'axios';
import "../Styles.css"
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddButton from './AddButton';
import DisplayButtons from './DisplayButtons';
import FilterButtons from './FilterButtons';


const GameTable = ({ initialGameData }) => {
    const [currentGameDataState, setGameData] = useState(initialGameData);

    const SortGames = async (sortParameter) => {
        // const response = await axios.get('/games');
        // let sorted = response.data;
        let sorted = [...currentGameDataState];
        console.log(sorted);
        console.log(sortParameter); 
        sorted.sort((a, b) => {
            const aValue = typeof(a[sortParameter]) === "string" ? a[sortParameter].toUpperCase() : +a[sortParameter];
            const bValue = typeof(b[sortParameter]) === "string" ? b[sortParameter].toUpperCase() : +b[sortParameter];
            if (aValue < bValue) return sortParameter === "isFavorite" ? 1 : -1;
            if (aValue > bValue) return sortParameter === "isFavorite" ? -1 : 1;
            return 0;
        })
        setGameData(sorted);
    }

    const filterGames = async (key, value, operator) => {
        const response = await axios.get('/games');
        let results = response.data;
        if (operator === ">") results = results.filter( game => game[key] >= value );
        if (operator === "<") results = results.filter( game => game[key] <= value );        
        setGameData(results);
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
            <br />
            <DisplayButtons loadAllGames={DisplayAllGames} loadFavorites={DisplayFavoriteGames}/>
            <FilterButtons filterFunction={filterGames} />
        </div>
    )
}

export default GameTable;