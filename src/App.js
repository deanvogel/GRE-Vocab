// import logo from './logo.svg';
import './App.css';
import React from 'react';
class Menu extends React.Component{
  render(){
    return <div className = "menu">
      <div class = "leftmenu"><text><b>GRE Vocab</b></text></div>
      <div class = "rightmenu">
        <button onClick={() => console.log('click')}>Start Game</button>
        <button onClick={() => console.log('click')}> Settings</button>
      </div>
    </div>
  }
}

// function StartGame(){

// }

function App() {
  return (
      <header className="App-header">
        <div>
          <Menu />
        </div>
      </header>
  );
}

// class WordBlock extends React.Component{
//   constructor(props) {
//     super(props);
//     this.word = {
//       word: props.word.toLowerCase(),
//     };
//   }
//   render(){
//     return <button className = "wordblock"><text> {this.word} </text> </button>
//   }
// }



export default App;
