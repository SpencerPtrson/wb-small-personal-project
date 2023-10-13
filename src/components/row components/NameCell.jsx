const NameCell = ({ inEditMode, Name, onNameChange }) => {
    return inEditMode ? (
        <td>
            <input className="cellInput" type="text" value = {Name} onChange={(e) => onNameChange(e.target.value)} />
        </td>
    ) : (
        <td>
            {Name}
        </td>
        )
    }

export default NameCell
