import './../../App.css';

import { Grid, CircularProgress, Paper} from '@material-ui/core';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Task from './Task/tasks';


//import {useHistory} from 'react-router-dom';

const ScoreBoard = ({ user }) => {
    const classes = useStyles();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser(user));
    }, [dispatch]);

    // console.log(auth);

    auth.user.score.sort();

    //task managament page - grab 1 comuln and a row will be a user and a score
    //above the column; if current user, display user name and placment score \
    //displayed at the top and also displayed in descending order
    return (
        user ? (
            !auth.length ? <CircularProgress /> : (
                <Grid className={classes.grid} container alignItems="stretch">
                    <Paper className={classes.paper}>
                        <h1>ACTIVE</h1>
                        {auth.map((user) => ( 
                            <Grid key={user._id}>
                                <Task user={user} />
                                <span>&nbsp;</span>
                            </Grid>
                        ))}
                    </Paper>
                </Grid>
            )
        ) : (window.location.pathname = "/")
    );
}

export default ScoreBoard;