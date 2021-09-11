import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    let eData = new Map([
      ["128512", ["smiling,smile,happy"]],
      ["128514", ["laugh,laughing,cry laughing"]],
      ["128518", ["naughty smile"]],
      ["128520", ["devil,red devil"]],
      ["128521", ["wynk"]],
      ["128523", ["tasty,foodie"]],
      ["128525", ["love eye,heart eye,two hearts eye"]],
      ["128536", ["kiss,flying kiss,love kiss"]],
      ["128147", ["love, heart"]],
      ["128545", ["angry"]],
      ["128532", ["sad"]]
    ]);

    this.state = {
      emoji: '',
      emojiData: eData
    }

    this.writeEmoji = this.writeEmoji.bind(this);
  }

  readInput(e) {
    let val = e.target.value;
    console.log(val);
    document.getElementById('inputValue').innerHTML = val ;
    this.state.emojiData.forEach((element, index) => {
      if(element[0].split(",").includes(val.toLowerCase()))
      {
        this.setState({
          emoji: index
        });
        console.log(this.state.emoji);
        document.getElementById('ans').innerHTML = '&#'+index ;
      }
      // else
      // {
      //   document.getElementById('ans').innerHTML = 'Not found' ;
      // }
    });
  }

  writeEmoji(e) {
    document.getElementById('ans').innerHTML = e.target.id;
  }

  render(){

    let list = [];

    this.state.emojiData.forEach((element, index) => {
      let str = '&#'+index+';';
      list.push(<p>{str}</p>);
    })

    return (
      <div className="App">
        <header className="">
        </header>
        <div className="container">
          <h2>Emoji Interpreter</h2>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Emoji by Name e.g., Sad, Angry" onChange={this.readInput.bind(this)} />
          </div>
          <p id="inputValue"></p>
          <h2 id="ans"></h2>
        </div>

        <div className="container">
          <span id="Happy" onClick={this.writeEmoji}>&#128512;</span>
          <span id="Laugh" onClick={this.writeEmoji}>&#128514;</span>
          <span id="Naughty" onClick={this.writeEmoji}>&#128518;</span>
          <span id="Devil" onClick={this.writeEmoji}>&#128520;</span>
          <span id="Wynk" onClick={this.writeEmoji}>&#128521;</span>
        </div>
      </div>
    );
  }
}

export default App;
