import { handleActions } from 'redux-actions'

const initialState = {
        listEercises: [],      
};

export default handleActions({
    SET_EXERCISES: (state, action) => ({...state, listEercises: action.payload})

}, initialState);