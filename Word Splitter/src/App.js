import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './CharComponent/Char'

class App extends Component {

  state={
    userInput:''
  }

  nameChangeHandler=(event)=>{
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text =this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index )=>{
      return <Char character={ch}  
      key ={index}
      clicked={()=> this.deleteCharHandler(index)} />;
    })

    return (
      <div className="App">
        <input 
        type="text"
        onChange={this.nameChangeHandler}
        value={this.state.userInput} />
        <p> {this.state.userInput}</p>
        <Validation inputLength = {this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
