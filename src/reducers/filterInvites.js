const initialState = '';


export default function filterInvites(state = initialState, action) {
    if (action.type === 'SEARCH_INVITE') {
        return action.payload;
    }
    return state;
}