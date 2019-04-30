
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'

import './index.css';
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux';
import { RootReducer } from './Reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


// const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();



