import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    persons: [
      {id: 'wdv432', name:'Nate', age: "33"}, 
      {id: 'dof361', name:'Heather', age: "32"}, 
      {id: 'gnr897', name:'Katie', age: "32"}
    ], 
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); 
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = Object.assign({}, this.state.person[personIndex]);
    const person = { 
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  targetPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }; 

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name} 
              age={person.age}
              key={person.id}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.targetPersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    ); 
  }
}

export default App;
