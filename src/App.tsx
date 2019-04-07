import React, { Component } from 'react';
import styled from './theme/styledComponent';

class App extends Component {

  render() {
    return (
      <Text>Theme is Working</Text>
    );
  }
}

export default App;

const Text = styled.div`
  color: ${({theme}) => theme.primary12};
`