import { useState } from "react"
import axios from "axios"

// Exported all of the components needed into a single file, then imported that one file into here to save lines. Not necessary, but neat that I can do it
import rowComponentExports from "./row components/rowComponentExports"
const { ModeButtons, ImageCell, NameCell, PlaytimeCell, MaxPlayersCell, MinPlayersCell, IsFavoriteCell } = rowComponentExports

// I could use a state object with all these as properties, but this feels more readable
const TableRow = ({ id, inEditMode, initialGameData, deleteFunction }) => {    
    const [isCurrentlyEditing, setInEditMode] = useState(inEditMode);
    const [imageURL, setImageURL] = useState(initialGameData.imageURL);
    const [name, setName] = useState(initialGameData.name);
    const [playtime, setPlaytime] = useState(initialGameData.averagePlayTime);
    const [minPlayers, setMinPlayers] = useState(initialGameData.minPlayers);
    const [maxPlayers, setMaxPlayers] = useState(initialGameData.maxPlayers);
    const [isFavorite, setIsFavorite] = useState(initialGameData.isFavorite)
    
    // Save data on an edited game
    const SaveData = async () => {
        // create game object from state data
        let gameObj = {
            imageURL,
            name,
            playtime,
            minPlayers,
            maxPlayers,
            isFavorite
        };
        // attempt to update data on server at id
        const response = await axios.put(`/editBoardGame/${id}`, gameObj);
        if (!response.data.error) { setInEditMode(false); }
        else console.log("Error:", response.data.error);
    }

    // HTML for different row components
    return (
        <tr>
            <ModeButtons
                inEditMode={isCurrentlyEditing}
                saveClick={SaveData}
                // change to edit mode
                editClick={() => setInEditMode(true)}
                deleteClick={() => deleteFunction(initialGameData.id)}
                />
            
            <ImageCell 
                inEditMode={isCurrentlyEditing}
                imageURL={imageURL}
                onURLChange={setImageURL}
                />
            
            <NameCell 
                inEditMode={isCurrentlyEditing}
                Name={name}
                onNameChange={setName}
                />

            <PlaytimeCell
                inEditMode={isCurrentlyEditing}
                Playtime={playtime}
                onPlaytimeChange={setPlaytime}
                />

            <MinPlayersCell
                inEditMode={isCurrentlyEditing}
                MinPlayerCount={minPlayers}
                onMinPlayerChange={setMinPlayers}
                />

            <MaxPlayersCell
                inEditMode={isCurrentlyEditing}
                MaxPlayerCount={maxPlayers}
                onMaxPlayerCountChange={setMaxPlayers}
                />

            <IsFavoriteCell 
                inEditMode={isCurrentlyEditing}
                isFavorite={isFavorite}
                onIsFavoriteChange={setIsFavorite}
                saveFunction={SaveData}
                />
        </tr>
    )
}

export default TableRow
