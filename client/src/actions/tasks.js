import {CREATE, UPDATE, GET_TASKS} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createTask = (task, history) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: CREATE, payload: data });

    history.push('/Dashboard') //after login, push to the homepage
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateTask = (id, task, history) => async (dispatch) =>{
  try {
    const { data } = await api.updateTask(id, task);

    dispatch({ type: UPDATE, payload: data });

    history.push('/Dashboard') //after login, push to the homepage
  } catch (error) {

    console.log(error);
  }

};

//get
export const getTasks = () => async (dispatch) => {
  try {
      const { data } = await api.getTasks();

      dispatch({type: GET_TASKS, payload: data});
      
  } catch (error) {
      console.log(error.message);
  }
}
