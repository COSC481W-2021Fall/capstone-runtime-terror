import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';

import { useSelector } from 'react-redux';

import Task from './Task/tasks';
import useStyles from './styles';

const Dashboard = ({setCurrentId, user}) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();
  
  return (
    user ? (
      !tasks.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {tasks.map((task) => (
            <Grid key={task._id} item xs={12} sm={6} md={3}>
              <Task task={task} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    ) : (window.location.pathname = "/")
  );
}

export default Dashboard;