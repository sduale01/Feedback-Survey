import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// const formSelection = {feelings: 5, understanding: 4, support: 3, comments: 'random comment'}
const formReducer = (state = [], action) => {
    if (action.type === 'GET_DATA') {
        return action.payload;
    }
    return state;
}

const collectSurveyReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'SET_UNDERSTANDING') {
        return {...state, understanding: action.payload}
    }  else if (action.type === 'SET_SUPPORT') {
        return {...state, support: action.payload}
    }  else if (action.type === 'SET_COMMENTS') {
        return {...state, comments: action.payload}
    } 
    return state;
}

const storeInstance = createStore(
    combineReducers({
        formReducer,
        collectSurveyReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
