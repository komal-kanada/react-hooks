import React, {  useEffect } from 'react';
import { useHttp } from '../hooks/http';
import Summary from './Summary';

const Character = props => {
   
  const [isLoading, fetchData] = useHttp('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar]);
  let loadedCharacter = null ;
  if(fetchData){
   loadedCharacter = {
    id: props.selectedChar,
    name: fetchData.name,
    height: fetchData.height,
    colors: {
      hair: fetchData.hair_color,
      skin: fetchData.skin_color
    },
    gender: fetchData.gender,
    movieCount: fetchData.films.length
  };
  }


  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
}

export default React.memo(Character);
