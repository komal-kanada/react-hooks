import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props =>{

  const [destroyed, setDestroyed] = useState(false);
  const [selectedCharacter, setselectedCharacter] = useState(1);
  const [chooseSide, setchooseSide] = useState('light');
  const sideHandler = side => {
    setchooseSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setselectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };
  let content = (
    <React.Fragment>
      <CharPicker
        side={chooseSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this, 'light')}>
        Light Side
        </button>
      <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
      {chooseSide === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}
export default App;
