const PlaytimeCell = ({ inEditMode, Playtime, onPlaytimeChange }) => {
    return inEditMode ? (
        <td>
            <input type="number" className="cellInput" value={Playtime} onChange={(e) => onPlaytimeChange(e.target.value)}/>
        </td>
    ) :
    (
        <td>
            {Playtime}
        </td>
    )
}

export default PlaytimeCell;