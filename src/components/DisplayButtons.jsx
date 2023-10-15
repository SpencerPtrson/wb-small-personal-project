const DisplayButtons = ({ loadAllGames, loadFavorites }) => {
    return (
        <>
            <button onClick={loadAllGames}>
                Display All Games
            </button>
            <button onClick={loadFavorites}>
                Display Favorite Games
            </button>
        </>
    )
}

export default DisplayButtons;