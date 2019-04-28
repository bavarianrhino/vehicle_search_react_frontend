
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'
import AllReducers from './Reducers/AllReducers';

import './index.css';
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();



