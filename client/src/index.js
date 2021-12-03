import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#24305E"
               },
     secondary: {
        main: "#24305E"
                }
              }
            },


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
));