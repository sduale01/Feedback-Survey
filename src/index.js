import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const formSelection = {feelings: 5, understanding: 4, support: 3, comments: 'random comment'}
const formReducer = (state = formSelection, action) => {

    return state;
}

const storeInstance = createStore(
    combineReducers({
        formReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
