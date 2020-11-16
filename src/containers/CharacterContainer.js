import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         characters: [],
         currentCharacter: null
      };
      this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
   }

handleCharacterSelected(index){
   const selectedCharacter = this.state.characters[index];
   this.setState({currentCharacter: selectedCharacter});
}

componentDidMount(){
   const url = 'http://hp-api.herokuapp.com/api/characters';
   const request = new XMLHttpRequest();
   request.open('GET', url);
   request.addEventListener('load', ()=>{
      const jsonString = request.responseText;
      const characterObjects = JSON.parse(jsonString);
      this.setState({characters: characterObjects});
   })
   request.send();
}

   render() {
      return (
         <>
            <h2>Harry Potter Characters</h2>
            <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
            <CharacterDetail character={this.state.currentCharacter} />
         </>
      );
   }

}

export default CharacterContainer;