const MinPlayerCell = ({ inEditMode, MinPlayerCount, onMinPlayerChange }) => {
    return inEditMode ? (
        <td>
            <input type="number" className="cellInput"value={MinPlayerCount} onChange={(e) => onMinPlayerChange(e.target.value)}/>
        </td>
    ) :
    (
        <td>
            {MinPlayerCount}
        </td>
    )
}

export default MinPlayerCell;