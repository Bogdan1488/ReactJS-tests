import React from 'react';
import {connect} from 'react-redux';

const Invite = ({invite}) => {

    return (
      <div>invite: {invite.text}</div>
    );

};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        invite: state.invites.find(invite => invite.id === Number(ownProps.params.id))
    }
}

export default connect(mapStateToProps)(Invite);