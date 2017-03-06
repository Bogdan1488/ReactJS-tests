import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {getInvites} from './actions/invites';


class App extends Component {
    addInvite() {
        this.props.onAddInvite(this.inviteInput.value);
    }
    findInvite() {
        this.props.onFindInvite(this.searchInput.value);
    }

      render() {
        return (
          <div>
              <div>
                  <input type="text" ref={(input) => {this.inviteInput = input}} />
                  <button onClick={this.addInvite.bind(this)}>add</button>
              </div>
              <div>
                  <input type="text" ref={(input) => {this.searchInput = input}} />
                  <button onClick={this.findInvite.bind(this)}>search</button>
              </div>
              <div>
                  <button onClick={this.props.onGetInvites}>get invites</button>
              </div>
              <ul>
              {this.props.invites.map((invite) => {
                 return <li key={invite.id}>{invite.text}</li>
              })}
            </ul>
          </div>
        );
      }
}


const invites = (invitesList, searchInput) => {
    return invitesList.filter((invite) => {
        return invite.text.includes(searchInput);
    });
}

export default connect(
    state => ({
        invites: invites(state.invites, state.filterInvites)
    }),
    dispatch => ({
        onAddInvite: (invite) => {
            const payload = {
                id: Date.now().toString(),
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