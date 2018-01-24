import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Fornes',Age: 25},
      {name:'Biel',Age: 23},
      {name:'Marins',Age: 22}
    ]
  }

  render() {
    return (
    <div className="App" >
      <h1>Welcome to React</h1>
      <button>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].Age} >Hobbies: Gaming</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].Age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].Age} />
    </div>
    );
  }
}

export default App;
