import './../../App.css';

import { Grid, Typography, Paper} from '@material-ui/core';
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

    const myData = [].concat(auth).sort((a, b) => a.score > b.score ? -1 : 1);

    //task managament page - grab 1 comuln and a row will be a user and a score
    //above the column; if current user, display user name and placment score \
    //displayed at the top and also displayed in descending order
    return (
        user ? (
            myData.length<1 ? <Typography className={classes.Typography} variant="h3">There are no Users!</Typography>  : (
                <Grid className={classes.grid} container alignItems="stretch">
                    <Paper className={classes.paper}>
                        <h1>SCORE</h1>
                        {myData.map((users) => ( 
                            <Grid key={users._id}>
                                <Task users={users} />
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