//import './../../App.css';
import { Grid, CircularProgress } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getTasks } from './../../actions/task'

import Task from './Task/Task';
import useStyles from './styles';
//import {useHistory} from 'react-router-dom';

function Dashboard({ setCurrentId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const tasks = useSelector((state) => state.tasks);
    const classes = useStyles();

    console.log(tasks);
    return(
        /* !tasks.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {tasks.map((task) => (
                <Grid key={task._id} item xs={12} sm={6} md={6}>
                  <Task task={task} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          ) */
        <Router>
        <h1>Task Dashboard Page</h1>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <Task />
                    <Task />
                    <Task />
                </Grid>
            </Grid>
        </Router>
    );
}

export default Dashboard;