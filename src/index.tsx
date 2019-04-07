import App from './App';
import React from 'react';
import { theme } from './theme';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from './theme/styledComponent';

render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
