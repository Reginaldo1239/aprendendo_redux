import React from 'react';
import logo from './logo.svg';
import Home from './screens/home';
import {Provider} from 'react-redux';
import store from './app/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home></Home>
    </div>
    </Provider>
  ); 
}

export default App;
