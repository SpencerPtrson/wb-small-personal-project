const ModeButtons = ({ inEditMode, saveClick, editClick, deleteClick }) => {
    return inEditMode ? (
      <td>
        <button className="cellInput" onClick={saveClick}>Save</button>
      </td>
    ) : (
      <td>
        <button className="cellInput" onClick={deleteClick}>Delete</button>
        <br />
        <button className="cellInput" onClick={editClick}>Edit</button>
      </td>
    )
  }
  
  export default ModeButtons;
  