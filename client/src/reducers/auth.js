import {AUTH, LOGOUT, UPDATESCORE, GET_USER} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case UPDATESCORE:
            return { ...state, authData: action?.data};

        case GET_USER:
            return action.payload;

        default:
            return state;
    }


}

export default authReducer;