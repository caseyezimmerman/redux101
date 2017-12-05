import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import the store from redux so we can use it
import { createStore } from 'redux';

// import the provider component from react-redux so that react and redux can talk
// they talk through 'connect' but the Provider component makes that happen
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));

