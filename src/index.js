
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import manageCars from './reducers/manageCars';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageCars, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);



