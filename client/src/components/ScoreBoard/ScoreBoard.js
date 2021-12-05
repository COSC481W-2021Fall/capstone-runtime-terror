import './../../App.css';

import { Card, Typography } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import React from 'react';
import {useDispatch} from 'react-redux';
import {getUser} from '../../actions/auth';



//import {useHistory} from 'react-router-dom';

const ScoreBoard = ({user}) => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    dispatch(getUser(user));

    

    //task managament page - grab 1 comuln and a row will be a user and a score
    //above the column; if current user, display user name and placment score \
    //displayed at the top and also displayed in descending order
    return(
        user ? (
            <Card>
            <div >
                
                <Typography variant="body2">{user.email}</Typography>
                <Typography variant="body2">{user.name}</Typography>
            </div>
            <div >
                <Typography variant="body2" color="textSecondary">{user.score}</Typography>
            </div>
            </Card>
        ) : (window.location.pathname = "/ScoreBoard")
    )
}

export default ScoreBoard;