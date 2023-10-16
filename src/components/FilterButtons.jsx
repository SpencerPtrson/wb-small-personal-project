import { useState } from "react";

const FilterButtons = ({ filterFunction }) => {
    const [filterCondition, setFilterCondition] = useState("minPlayers")
    const [operator, setOperator] = useState(">");
    const [value, setValue] = useState(0);
    
    return (
        <>
            <br />
            <input type="number" onChange={(e) => setValue(e.target.value)}/>
            <select defaultValue={operator} onChange={(e) => setFilterCondition(e.target.value)} >
                <option value="minPlayers">Min Players</option>
                <option value="maxPlayers">Max Players</option>
                <option value="averagePlayTime">Average Playtime</option>
            </select>
            <br />
            <select defaultValue={filterCondition} onChange={(e) => setOperator(e.target.value)} >
                <option value=">">At Least</option>
                <option value="<">At Most</option>
            </select>
            <br />
            <button onClick={() => filterFunction(filterCondition, value, operator)}>
                Filter
            </button>
        </>
    )
}

export default FilterButtons;