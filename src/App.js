import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    let eData = new Map([
      ["🤩", ["Star-Struck"]],
      ["😘", ["Face Blowing a Kiss"]],
      ["🤪", ["Zany Face"]],
      ["🤑", ["Money-Mouth Face"]],
      ["😃", ["Grinning Face with Big Eyes"]],
      ["😁", ["Beaming Face with Smiling Eyes"]],
      ["😅", ["Grinning Face with Sweat"]],
      ["🙃", ["Upside-Down Face"]],
      ["😉", ["Winking Face"]],
      ["😍", ["Smiling Face with Hearts"]],
      ["😜", ["Face with Tongue"]],
      ["🤫", ["Shushing Face"]],
      ["😝", ["Squinting Face with Tongue"]],
      ["🤗", ["Hugging Face"]],
      ["🥱", ["Yawning Face"]],
      ["🤔", ["Thinking Face"]],
      ["🤐", ["Zipper-Mouth Face"]],
      ["😐", ["Neutral Face"]],
      ["😑", ["Expressionless Face"]],
      ["😏", ["Smirking Face"]],
    ]);

   
    this.state = {
      emoji: '',
      emojiData: eData
    }

    this.writeEmoji = this.writeEmoji.bind(this);
  }

  readInput(e) {
    
    let val = e.target.value;
    let res = "";

    if(val != "")
      res = this.state.emojiData.get(val) ? this.state.emojiData.get(val) : "Emoji meaning not found";
    else
      res = "";
      
    document.getElementById('ans').innerHTML =  res;

  }

  writeEmoji(e) {
    document.getElementById('ans').innerHTML = e.target.id;
  }


  render(){

    let list = [];
    let spanList = [];
    let i = 0;

    this.state.emojiData.forEach((element, index) => {
      let str = '&#'+index+';';
      list.push(<p>{str}</p>);
      if(i++ < 10)
        spanList.push(<span id={element[0]} onClick={this.writeEmoji}>{index}</span>);        
    })

    return (
      <div className="App">
        <header className="">
        </header>
        <div className="container">
          <h2>Emoji Interpreter</h2>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Emoji meaning by emoticon e.g., 😍" onChange={this.readInput.bind(this)} />
          </div>
          <p id="inputValue"></p>
          <h2 id="ans"></h2>
        </div>

        <div className="container">
        {spanList}
        </div>
        <p className="mt-1">Click on any emoji to know its meaning</p>
      </div>
    );
  }
}

export default App;
