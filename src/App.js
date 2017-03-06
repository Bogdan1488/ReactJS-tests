import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getInvites } from './actions/invites';
import Menu from './components/Menu';



const App = ({ invites, onAddInvite, onFindInvite, onGetInvites, ownProps }) => {
    let inviteInput = '',
        searchInput = '';

    console.log(ownProps);

    const addInvite = () => {
        onAddInvite(inviteInput.value);
    }
    const findInvite = () => {
        onFindInvite(searchInput.value);
    }


    return (
      <div>
          <Menu/>
          <div>
              <input type="text" ref={(input) => {inviteInput = input}} />
              <button onClick={addInvite}>add</button>
          </div>
          <div>
              <input type="text" ref={(input) => {searchInput = input}} />
              <button onClick={findInvite}>search</button>
          </div>
          <div>
              <button onClick={onGetInvites}>get invites</button>
          </div>
          <ul>
          {invites.map((invite) => {
             return <li key={invite.id}>
                 <Link to={`/invite/${invite.id}`}>{invite.text}</Link>
             </li>
          })}
        </ul>
      </div>
    );

}


const invites = (invitesList, searchInput) => {
    return invitesList.filter((invite) => {
        return invite.text.includes(searchInput);
    });
}

export default connect(
    (state, ownProps) => ({
        invites: invites(state.invites, state.filterInvites),
        ownProps
    }),
    dispatch => ({
        onAddInvite: (invite) => {
            const payload = {
                id: Date.now(),
                text: invite
            };
            dispatch({type: 'ADD_INVITE', payload});
        },
        onFindInvite: (search) => {
            dispatch({type: 'SEARCH_INVITE', payload: search});
        },
        onGetInvites: () => {
            dispatch(getInvites());
        }
    })
)(App);