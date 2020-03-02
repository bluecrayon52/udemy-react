import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    persons: [
      {name:'Nate', age: "33"}, 
      {name:'Heather', age: "32"}, 
      {name:'Katie', age: "32"}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( 
      {
        persons: [
          {name: newName, age: "33"}, 
          {name:'Heather Arnold', age: "32"}, 
          {name:'Katie Mishoe', age: "32"}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState( 
      {
        persons: [
          {name: "Nate", age: "33"}, 
          {name: event.target.value, age: "32"}, 
          {name:'Katie', age: "32"}
        ]
      }
    )
  }


  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <button onClick={() => this.switchNameHandler("Nathaniel")}>Switch Name</button>
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Nate")}
        changed={this.nameChangedHandler}>My Hobbies: Kick Boxing</Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    ); 
  }
}

export default App;
