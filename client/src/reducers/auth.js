import {AUTH, GET_USER, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};
    
        case LOGOUT:

            localStorage.clear();
            return {...state, authData: null};

        case GET_USER:
            console.log(action.payload);
            return action.payload;

        default:
            return state;
    }


}

export default authReducer;