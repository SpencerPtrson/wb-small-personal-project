const AddButton = ({ addNewRow }) => {
    return (
      <tr>
          <td colSpan={7}><button onClick={addNewRow}>Add Row</button></td>
      </tr>
    )
  }
  
  export default AddButton
  