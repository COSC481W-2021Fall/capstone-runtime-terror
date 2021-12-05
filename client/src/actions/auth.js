import { AUTH, UPDATESCORE } from '../constants/actionTypes';
import * as api from '../api/index';


//Signing in to current account
export const signin = (formData, history) => async (dispatch) => {

    try{
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        //after login, push to the homepage
        window.location = '/Dashboard'; 
        window.location.reload(false);
    }catch (error){
        const incorrect = document.getElementById('incorrect');
        const wrongPassword = document.getElementById('wrongPassword');
        wrongPassword.style.visibility= 'visible';
        incorrect.style.visibility= 'visible';
        incorrect.style.color= 'red';

    }


};

//Creating a new user
export const signup = (formData, history) => async (dispatch) => {

    try{
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});

        //after login, push to the homepage
        window.location = '/Dashboard';
        window.location.reload(false);
    }catch (error){
        console.log(error);
    }
};



//Update
export const updateScore = (email, user, history) => async (dispatch) =>{
    try {
      const { data } = await api.updateScore(email, user);
  
      dispatch({ type: UPDATESCORE, payload: data });
    } catch (error) {
  
      console.log(error);
    }
  
};

