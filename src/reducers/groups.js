const initialState = [];

export default function groups(state = initialState, action) {
    if (action.type === 'ADD_GROUP') {
        return [...state, action.payload]
    }
    return state;
}