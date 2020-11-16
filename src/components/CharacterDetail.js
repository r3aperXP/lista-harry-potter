import React from 'react';

const CharacterDetail = ({character}) => {
if (!character) return null;
return(
   <>
   <h3>{character.name}</h3>

   <p>Gender: {character.gender}</p>
   <p>House: {character.house}</p>
   <p>Date of Birth: {character.dateOfBirth}</p>
   <p>Ancestry: {character.ancestry}</p>
   <ul>Wand Spec:</ul>
   <li>Wood: {character.wand.wood}</li>
   <li>Core: {character.wand.core}</li>
   <li>Length: {character.wand.length}cm</li>
   <p>Actor: {character.actor}</p>
   <img alt="character image" src={character.image}/>
   </>
);

}

export default CharacterDetail;

