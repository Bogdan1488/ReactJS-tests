const initialState = [];

export default function invites(state = initialState, action) {
    if (action.type === 'ADD_INVITE') {
        return [...state, action.payload]
    } else if (action.type === 'FETCH_INVITES_SUCCESS') {
        return action.payload;
    }
    return state;
}