const MaxPlayersCell = ({ inEditMode, MaxPlayerCount, onMaxPlayerCountChange }) => {
    return inEditMode ? (
        <td>
            <input type="number" className="cellInput" value={MaxPlayerCount} onChange={(e) => onMaxPlayerCountChange(e.target.value)}/>
        </td>
    ) :
    (
        <td>
            {MaxPlayerCount}
        </td>
    )
}

export default MaxPlayersCell;