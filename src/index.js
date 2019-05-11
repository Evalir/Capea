import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

// REDUX
import reducers from './reducers';
import App from './components/App/App';

// STYLED COMPONENTS
import { theme } from './styles/theme.js';

import './app.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
