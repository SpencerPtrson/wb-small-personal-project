const ImageCell = ({ inEditMode, imageURL, onURLChange }) => {
    return !inEditMode ? (
        <td>
            <img src={imageURL} alt="Please Provide an Image" width="100px" />
        </td>
    ) :
    (
        <td>
            <input type="text" className="cellInput" value={imageURL} onChange={(e) => onURLChange(e.target.value)}/>
        </td>
    )
}

export default ImageCell;