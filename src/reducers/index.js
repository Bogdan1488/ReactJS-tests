import {combineReducers} from 'redux';

import invites from './invites';
import groups from './groups';
import filterInvites from './filterInvites';

export default combineReducers({
    invites,
    groups,
    filterInvites
});