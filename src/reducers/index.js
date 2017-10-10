import { handleActions } from 'redux-actions'

const initialState = {
        cards: [
            
        ], 
        counter:0      
};


// export default function userstate(state = initialState, action) {
//     switch (action.type) {
//         case 'CREATE_CARD': {
//             return {  ...state, cards: [...state.cards, action.payload] }
//         }
//         case 'MOVE_CARD': {
//             return { ...state, cards: [...action.payload ]}  
//         } 
//         case 'DELETE_CARD': {
//             return { ...state, cards: state.cards.filter(card => card.id !== action.payload.id) }  
//         } 
//         default:
//             return state;
            
//         }

// }

const userstate = handleActions({
    INCREMENT: (state) => payload => ({
        ...state, counter: payload
    })
  }, initialState);
  
  export default userstate;