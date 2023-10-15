const TableHeader = ({ sortFunction }) => {
    return (
        <tr>
            <th></th>
            <th>Box Cover</th>
            <th onClick={() => sortFunction("name")}>Game</th>
            <th>Playtime (minutes)</th>
            <th>Min Players</th>
            <th>Max Players</th>
            <th>Favorite</th>
        </tr>
    )
}

export default TableHeader;