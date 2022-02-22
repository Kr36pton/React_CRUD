import React from 'react'
const CharacterTable = (props) => {

console.log(props.character)

    return (  
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name data</td>
                    <td>Game data</td>
                    <td>Year data</td>
                    <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default CharacterTable;