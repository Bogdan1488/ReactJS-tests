import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import invites from './invites';
import groups from './groups';
import filterInvites from './filterInvites';

export default combineReducers({
    routing: routerReducer,
    invites,
    groups,
    filterInvites
});