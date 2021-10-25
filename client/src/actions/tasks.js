import {CREATE} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//Update