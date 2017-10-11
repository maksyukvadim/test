import { createAction } from 'redux-actions'
import { CLIENT_KEY, API } from '../constants';
import { pipeParams } from '../utils/';
export const setExercises = createAction("SET_EXERCISES", (val) => val);

// export const getExercises = datas => dispatch => 
//     fetch('http://dev.videotherapy.co/vt/api/dispatcher.php', {
//         method: 'post',
//         credentials: "include",
//         body: JSON.stringify( datas ) 
//         })
//         .then((respons) => respons.text())
//         .then(text => {
//             console.log(text)
//             dispatch(setExercises(text.response));
//         } );

export const getExercises = (limit, offset) => dispatch =>    
    fetch('http://localhost:8080/data', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:  pipeParams(
            { clientKey: CLIENT_KEY, 
              api: API, 
              paging: { 
                limit:limit,
                offset:offset
            }})
        })
        .then((respons) => respons.json())
        .then(json => {
            dispatch(setExercises(json.data));
        } );