import { useState } from 'react';
import axios from 'axios';
import "../Styles.css"
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddButton from './AddButton';


const GameTable = ({ initialGameData }) => {
    const [currentGameDataState, setGameData] = useState(initialGameData);

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
                    <TableHeader />
                </thead>

                <tbody>
                    {rows}
                </tbody>
                
                <tfoot>
                    <AddButton addNewRow={addRow}/>
                </tfoot>
            </table>
        </div>
    )
}

export default GameTable;