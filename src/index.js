import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './index.scss';
import App from './components/App/App';
import { store } from './Redux/Store/store';

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
