const TableHeader = ({ sortFunction }) => {
    return (
        <tr>
            <th onClick={() => sortFunction("id")}></th>
            <th onClick={() => sortFunction("imageURL")}>Box Cover</th>
            <th onClick={() => sortFunction("name")}>Game</th>
            <th onClick={() => sortFunction("averagePlayTime")}>Playtime (minutes)</th>
            <th onClick={() => sortFunction("minPlayers")}>Min Players</th>
            <th onClick={() => sortFunction("maxPlayers")}>Max Players</th>
            <th onClick={() => sortFunction("isFavorite")}>Favorite</th>
        </tr>
    )
}

export default TableHeader;