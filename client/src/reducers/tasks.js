import {GET_TASKS} from '../constants/actionTypes';

const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case GET_TASKS:
            return action.payload;
        default:
            return tasks;
    }
}
export default taskReducer;