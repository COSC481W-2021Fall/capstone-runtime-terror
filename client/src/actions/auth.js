import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';



export const signin = (formData, history) => async (dispatch) => {

    try{
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        window.location = '/Dashboard'; //after login, push to the homepage
        window.location.reload(false);
    }catch (error){
        const incorrect = document.getElementById('incorrect');

        incorrect.style.visibility= 'visible';
        incorrect.style.color= 'red';

    }


};

export const signup = (formData, history) => async (dispatch) => {

    try{
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});

        window.location = '/Dashboard'; //after login, push to the homepage
        window.location.reload(false);
    }catch (error){
        console.log(error);
    }
};










