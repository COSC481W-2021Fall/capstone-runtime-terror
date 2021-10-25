import { CREATE} from '../constants/actionTypes';

export default (tasks = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...tasks, action.payload];

        default:
            return tasks;
    }


}
