import { CREATE, UPDATE, GET_TASKS } from '../constants/actionTypes';

export default (tasks = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...tasks, action.payload];
        case GET_TASKS:
            return action.payload;
        case UPDATE:
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task);
        default:
            return tasks;
    }

}
