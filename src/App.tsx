import React, { Component } from 'react';
import NavBarHorizontal from './components/NavBar/NavBarHorizontal';
import NavBarVertical from './components/NavBar/NavBarVertical';

class App extends Component {
  render() {
    return (
      <>
        <NavBarHorizontal />
        <NavBarVertical />
      </>
    );
  }
}

export default App;
