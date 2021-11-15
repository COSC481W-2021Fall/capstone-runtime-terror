import {CREATE, UPDATE, GET_TASKS, DELETE} from '../constants/actionTypes';
import * as api from '../api/index.js';


//Action for creating a task
export const createTask = (task, history) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateTask = (id, task, history) => async (dispatch) =>{
  try {
    const { data } = await api.updateTask(id, task);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {

    console.log(error);
  }

};

//get
export const getTasks = (user) => async (dispatch) => {
  try {
    console.log(user);
    const { data } = await api.getTasks(user);

    dispatch({type: GET_TASKS, payload: data});
      
  } catch (error) { 
      console.log(error.message);
  }
}

//Delete
export const deleteTask = (id) => async (dispatch) => {
  try{
      await api.deleteTask(id);
      dispatch({type: DELETE, payload: id });
  } catch(error) {
      console.log(error);
  }

}
