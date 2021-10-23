import { CREATE} from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }


}
