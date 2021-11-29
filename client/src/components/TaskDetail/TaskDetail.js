import './../../App.css';
import React from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from '../TaskDetail/styles';
import Task from './Task/tasks';

const TaskDetail = ({ setCurrentId, user }) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();

  return (
    user ? (
      !tasks.length ? <CircularProgress /> : (
        <div>
          <Grid className={classes.grid} container alignItems="stretch">
            <Paper className={classes.paper}>
                <h1>TO-DO</h1>
                {tasks.map((task => task.todo && (
                    <Grid  key={task._id}>
                      <Task task={task} setCurrentId={setCurrentId} />
                      <span>&nbsp;</span>
                    </Grid>
                )))}
            </Paper>
            <Paper className={classes.paper}>
              <h1>ACTIVE</h1>
              {tasks.map((task => task.active && (
                  <Grid  key={task._id}>
                    <Task task={task} setCurrentId={setCurrentId} />
                    <span>&nbsp;</span>
                  </Grid>
              )))}      
            </Paper>
            <Paper className={classes.paper}>
                <h1>COMPLETE</h1>
                {tasks.map((task => task.completed && (
                    <Grid key={task._id}>
                      <Task task={task} setCurrentId={setCurrentId} />
                      <span>&nbsp;</span>
                    </Grid>
                )))}
            </Paper>
          </Grid>
        </div>
      )
    ) : (window.location.pathname = "/")
  );
}

export default TaskDetail;