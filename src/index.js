import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import { createLogger } from 'redux-logger';
import App from './Containers/App';
import './Containers/App.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './Robots';
import {requestRobots, searchRobots} from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
