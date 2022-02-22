import React, { useState } from 'react';
import UserTable from './components/CharacterTable';

function App() {
  const characterData = [
    { id: 1, name: 'Kirby', game: 'Kirby', year: '1992' },
    { id: 2, name: 'Link', game: 'The Legend Of Zelda', year: '1986' },
    { id: 3, name: 'Ryu', game: 'Street Fighter', year: '1987' },
  ]

  const [character, setCharacter] = useState(characterData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add character</h2>
        </div>
        <div className="flex-large">
          <h2>View character</h2>
          <UserTable character={character}/>
        </div>
      </div>
    </div>
  );
}

export default App;
