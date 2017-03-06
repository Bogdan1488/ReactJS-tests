var mockAPI = [
    {
        id: 1,
        text: 'oh my dear',
    },
    {
        id: 2,
        text: 'I am serious about you',
    },
    {
        id: 3,
        text: 'Please reply me!',
    }
];

export const getInvites = () => dispatch => {
    setTimeout(() => {
        dispatch({type: 'FETCH_INVITES_SUCCESS', payload: mockAPI});
    }, 2000);
}