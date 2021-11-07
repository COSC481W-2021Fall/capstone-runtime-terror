import './../../App.css';
import React, { useEffect } from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';

import { useSelector } from 'react-redux';
import useStyles from '../TaskDetail/styles';
import { createTask, updateTask} from '../../actions/tasks';
import Task from '../TaskDetail/Task/tasks';


const TaskDetail = ({setCurrentId}) => {
    const tasks = useSelector((state) => state.tasks);
    const classes = useStyles();

    return (
      !tasks.length ? <CircularProgress /> : (
          <Grid className={classes.container} mainContainer spacing={3}>
            {tasks.map((task) => (
              <Grid key={task._id} item xs={12} sm={6} md={4}>
                <Task task={task} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
      )
      );
  }

  export default TaskDetail;