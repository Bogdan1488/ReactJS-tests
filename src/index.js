import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Router, Route, hashHistory} from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';

import App from './App';
import About from './components/About';
import Invite from './components/Invite';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    (<Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/invite/:id" component={Invite} />
        </Router>
    </Provider>),
  document.getElementById('root')
);
