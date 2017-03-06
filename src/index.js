import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>),
  document.getElementById('root')
);


//
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// });
//
// store.dispatch({
//     type: 'ADD_INVITE',
//     payload: 'Hi my dear'
// });
// store.dispatch({
//     type: 'ADD_INVITE',
//     payload: 'Hi honey'
// });
