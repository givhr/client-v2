import React, { Component } from 'react';
import NavBarHorizontal from './components/NavBar/NavBarHorizontal';
import NavBarVertical from './components/NavBar/NavBarVertical';
import { Router } from '@reach/router';
import styled from './theme/styledComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <GeneralInfo path="/survey/new" />
        <Scheduling path="/survey/:id" />
      </Router>
    );
  }
}

export default App;

const GeneralInfo = (props: any) => (
  <Container>
    <h1>GENERAL INFO PAGE</h1>
  </Container>
);

const Scheduling = (props: any) => (
  <Container id={props.id}>
    <h1>SCHEDULING INFO PAGE</h1>
    <h3>Survey ID = {`${props.id}`}</h3>
  </Container>
);

const Container = styled.div`
  background: ${({ theme, id }) => (id ? theme.primary13 : theme.primary5)};
`;

// const BuildSurvey = () => (
//   <div>
//     <h1>GENERAL INFO PAGE</h1>
//   </div>
// );

// const PreviewPost = () => (
//   <div>
//     <h1>GENERAL INFO PAGE</h1>
//   </div>
// );
