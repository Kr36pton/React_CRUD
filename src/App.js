import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserTable from './components/CharacterTable';
import AddCharacterForm from './components/AddCharacterForm';

function App() {
  const characterData = [
    { id: uuidv4(), name: 'Kirby', game: 'Kirby', year: '1992' },
    { id: uuidv4(), name: 'Link', game: 'The Legend Of Zelda', year: '1986' },
    { id: uuidv4(), name: 'Ryu', game: 'Street Fighter', year: '1987' },
  ]

  //Estate
  const [character, setCharacter] = useState(characterData)

  //Agregar personaje
  const addCharacter = (character) =>{
    character.id = uuidv4()
    setCharacter([
      ...characterData,
      character
    ])
  }

  //Eliminar personaje
  const deleteCharacter = (id) =>{
    //console.log(id)
    setCharacter(character.filter((character) => character.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add character</h2>
          <AddCharacterForm addCharacter={addCharacter}/>
        </div>
        <div className="flex-large">
          <h2>View character</h2>
          <UserTable character={character} deleteCharacter={deleteCharacter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
