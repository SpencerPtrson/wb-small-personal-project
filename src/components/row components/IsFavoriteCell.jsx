// import { isAxiosError } from "axios";

// const IsFavoriteCell = ({ inEditMode, isFavorite, onIsFavoriteChange, saveFunction }) => {
//     const toggleIsFavorite = () => {
//         if (isFavorite) onIsFavoriteChange(false);
//         if (!isFavorite) onIsFavoriteChange(true);

//     }
    
//     let favIcon;
//     if (isFavorite) favIcon = <img style={{border: "none"}} onClick={toggleIsFavorite} src="https://th.bing.com/th/id/R.0cfc796551aa2ce4c6890ddaceecfe40?rik=cUQVNFi%2bjLGLug&pid=ImgRaw&r=0" alt="Cannot find information" width="50px" />
//     if (!isFavorite) favIcon = <img style={{border: "none"}} onClick={toggleIsFavorite} src="https://clipartcraft.com/images/clipart-heart-outline-4.png" alt="Cannot find information" width="50px"/>

//     return (
//         <td>
//             {favIcon}
//         </td>
//     )
// }

// export default IsFavoriteCell;


import { isAxiosError } from "axios";

const IsFavoriteCell = ({ inEditMode, isFavorite, onIsFavoriteChange, saveFunction }) => {
    const toggleIsFavorite = () => {
        if (isFavorite) onIsFavoriteChange(false);
        if (!isFavorite) onIsFavoriteChange(true);
    }
    
    let favIcon;
    if (isFavorite) favIcon = <img style={{border: "none"}} src="https://th.bing.com/th/id/R.0cfc796551aa2ce4c6890ddaceecfe40?rik=cUQVNFi%2bjLGLug&pid=ImgRaw&r=0" alt="Cannot find information" width="50px" />
    if (!isFavorite) favIcon = <img style={{border: "none"}} src="https://clipartcraft.com/images/clipart-heart-outline-4.png" alt="Cannot find information" width="50px"/>

    return inEditMode ? (
        <td>
            <input type="checkbox" checked={isFavorite} onClick={toggleIsFavorite} />
        </td>
    ) :
    (
        <td>
            {favIcon}
        </td>
    )
}

export default IsFavoriteCell;