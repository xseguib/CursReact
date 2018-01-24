import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Fornes',Age: 25},
      {name:'Max',Age: 23},
      {name:'Marins',Age: 22}
    ]
  }

  render() {
    return (
    <div className="App" >
      <h1>Welcome to React</h1>
      <button>Switch Name</button>
      <Person name="fornes" age="25" >Hobbies: Gaming</Person>
      <Person name="paco" age="345" />
      <Person name="biel" age="23" />
    </div>
    );
  }
}

export default App;
