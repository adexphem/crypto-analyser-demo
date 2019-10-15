import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import Router from './Router';
import Navbar from './components/navbar/index';

import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
