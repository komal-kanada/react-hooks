import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http'

import './CharPicker.css';

const CharPicker = props => {
  // const [loadedChars, setloadedChars] = useState([]);
  // const [isLoading, setisLoading] = useState(false);
  // state = { characters: [], isLoading: false };

  const [isLoading, fetchData] = useHttp('https://swapi.co/api/people', []);

  const selectedCharacter = fetchData ? fetchData.results.slice(0, 5).map((char, index) => ({
    name: char.name,
    id: index + 1
  })) : [];
  

  let content = <p>Loading characters...</p>;

  if (
    !isLoading &&
    selectedCharacter &&
    selectedCharacter.length > 0
  ) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {selectedCharacter.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!selectedCharacter || selectedCharacter.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
}

export default CharPicker;
