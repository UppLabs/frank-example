import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

const isDebuggingEnabled = (typeof atob !== 'undefined');

const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      isDebuggingEnabled ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : applyMiddleware()
    )
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>     
    );
  }
}

export default App;
