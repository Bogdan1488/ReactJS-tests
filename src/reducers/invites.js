const initialState = [
    {
        id: 1,
        text: 'hi dear'
    },
    {
        id: 2,
        text: 'oh honey how are you?'
    }
];

export default function invites(state = initialState, action) {
    if (action.type === 'ADD_INVITE') {
        return [...state, action.payload]
    } else if (action.type === 'FETCH_INVITES_SUCCESS') {
        return action.payload;
    }
    return state;
}