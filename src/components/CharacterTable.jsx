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
                {
                    props.character.map(character =>(
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.game}</td>
                            <td>{character.year}</td>
                            <td>
                                <button className="button muted-button">Edit</button>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default CharacterTable;