import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import the store from redux so we can use it
import { createStore } from 'redux';

// import the provider component from react-redux so that react and redux can talk
// they talk through 'connect' but the Provider component makes that happen
import { Provider } from 'react-redux';

// import the main reducer (root reducer) so that we can hand it to the store
import reducers from './reducers/index';

// make a store for redux to use
const theStore = createStore(reducers)


// provider is the component that makes connect work (inside the containers)
// it takes a prop of store, which is the reduc store
// the redux store was made by createStore and giving it to the root reducer
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root'));

