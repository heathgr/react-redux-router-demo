import React, { Component } from 'react';
import Content from './Content';
import Navigation from './Navigation';
import StatusBar from './StatusBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Navigation />
        <StatusBar />
      </div>
    );
  }
}

export default App;
