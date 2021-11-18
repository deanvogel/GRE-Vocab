// import logo from './logo.svg';
import grelogo from './assets/GRE_logo.png'
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';


function App() {
  return (
      <header className="App-header">
        <div>
          <Menu />
        </div>
      </header>
  );
}
class Menu extends React.Component{
  render(){
    return <div className = "menu">
      <div class = "leftmenu"><img src={grelogo} alt="gre"></img><text><b>GRE Vocab</b></text></div>
      <div class = "rightmenu">
        <div class = "rightmenucontents">
          <MenuItem label="Start game"/>
          <MenuItem label = "Options"/>
        </div>
      </div>
    </div>
  }
}
class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.label = props.label;
  }
render(){
  return <Button variant = "contained" onClick={() => console.log('click')}>{this.label}</Button>
  }
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
