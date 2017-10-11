import { createAction } from 'redux-actions'
import { CLIENT_KEY } from '../constants';
export const setExercises = createAction("SET_EXERCISES": (val) => val);

export const getExercises = data => dispatch => 
    fetch('http://dev.videotherapy.co/vt/api/dispatcher.php', {
        method: 'post',
        mode: 'no-cors',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: JSON.stringify(data)
        })
        .then((respons) => respons.text())
        .then(text => {
            console.log(text)
            dispatch(setExercises(text.response));
        } );