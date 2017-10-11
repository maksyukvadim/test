import { handleActions } from 'redux-actions'

const initialState = {
        cards: [], 
        counter: 0      
};

export default handleActions({
    INCREMENT: (state, action) => ({...state, counter: action.payload})

}, initialState);