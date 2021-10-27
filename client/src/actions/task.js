import { GET_TASKS } from '../constants/actionTypes';
import * as api from '../api/index';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.getTasks();

        dispatch({type: GET_TASKS, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}