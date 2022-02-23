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
                {props.character.length > 0 ? (
                    props.character.map(character =>(
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.game}</td>
                            <td>{character.year}</td>
                            <td>
                                <button className="button muted-button" onClick={()=>{props.editRow(character)}}>Edit</button>
                                <button className="button muted-button" onClick={()=>{props.deleteCharacter(character.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>No Characters</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
 
export default CharacterTable;