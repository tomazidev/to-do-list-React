import React, { Component } from 'react';
import './App.css';
import Note from './component/Note/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Note />
      </div>
    );
  }
}

export default App;