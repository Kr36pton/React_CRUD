import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CharacterTable from './components/CharacterTable';
import AddCharacterForm from './components/AddCharacterForm';
import EditCharacterForm from './components/EditCharacterForm';

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

  //Editar personaje
  const [editing, setEditing] = useState(false)

  const [currentCharacter, setCurrentCharacter] = useState({ 
    id: null, name: '', game: '', year: '' 
  })

  const editRow = (character) => {
    setEditing(true) 
    setCurrentCharacter({ id: character.id, name: character.name, game: character.game, year: character.year })
  }

  const updateCharacter = (id, updatedCharacter) => {
    setEditing(false)
    setCharacter(character.map(character => (character.id === id ? updatedCharacter : character)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit character</h2>
              <EditCharacterForm 
              setEditing={setEditing} 
              currentCharacter={currentCharacter} 
              updateCharacter={updateCharacter}
              />
            </div>
            ) : (
              <div>
                <h2>Add character</h2>
                <AddCharacterForm addCharacter={addCharacter}/>
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View character</h2>
          <CharacterTable 
          character={character} 
          deleteCharacter={deleteCharacter} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
