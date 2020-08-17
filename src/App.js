import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  createQuestionData(numQuestions, numCorrect){
      this.value1= Math.floor(Math.random() * 100);
      this.value2= Math.floor(Math.random() * 100);
      this.value3= Math.floor(Math.random() * 100);
      this.proposedAnswer= Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
	  this.numQuestions= numQuestions;
      this.numCorrect= numCorrect;
  }
  state = { 
    questionData: new this.createQuestionData(0,0),     
  }

  checkReload= (answer)=>{
    this.setState(currentState => {
     let numCorrect= currentState.questionData.numCorrect;
     if (currentState.questionData.proposedAnswer === currentState.questionData.value1 + currentState.questionData.value2 +currentState.questionData.value3){
       if(answer){
         numCorrect = currentState.questionData.numCorrect+1;
       }
     } else {
       if(!answer){
         numCorrect = currentState.questionData.numCorrect+1;
       }      
     }
     return {questionData: new this.createQuestionData(currentState.questionData.numQuestions+1,numCorrect)} 
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.questionData.value1} + ${this.state.questionData.value2} + ${this.state.questionData.value3} = ${this.state.questionData.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.checkReload(true)}>True</button>
          <button onClick={()=>this.checkReload(false)}>False</button>
          <p className="text">
            Your Score: {this.state.questionData.numCorrect}/{this.state.questionData.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
