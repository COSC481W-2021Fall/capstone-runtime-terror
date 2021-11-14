import './../../App.css';
import React, { useEffect } from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from '../TaskDetail/styles';
import { createTask, updateTask} from '../../actions/tasks';
import Task from './Task/tasks';

<<<<<<< HEAD
const TaskDetail = ({user}) => {
    return(
        user ? (
            <div>
                <h1>Task Detail Page</h1>
            </div>
        ) : (window.location.pathname = "/")
    )
}
=======
>>>>>>> origin/Abdul-Hai_Miriam_task_manager_form


const TaskDetail = ({setCurrentId}) => {
    const tasks = useSelector((state) => state.tasks);
    const classes = useStyles();
    var isItActive = tasks.active;

    return (
      !tasks.length ? <CircularProgress /> : (
         <Grid className={classes.mainContainer} container>
          <Grid className={classes.container} mainContainer spacing={3}>
          <h1>todo</h1>
            {tasks.map((task => task.todo && (
              <div>
              <Grid {...classes.mainContainer} container key={task._id} item xs={12} sm={6} md={10}>
                <Task task={task} setCurrentId={setCurrentId} />
              </Grid>
              <span>&nbsp;</span>
              </div>
            ) 
          )
        )
      }
          </Grid>
          <Grid className={classes.container} mainContainer spacing={3}>
          <h1>active</h1>
          {tasks.map((task => task.active && (
              <div>
              <Grid {...classes.mainContainer} container key={task._id} item xs={12} sm={6} md={10}>
                <Task task={task} setCurrentId={setCurrentId} />
              </Grid>
              <span>&nbsp;</span>
              </div>
            ) 
          )
        )
      }
        </Grid>
        <Grid className={classes.container} mainContainer spacing={3}>
        <h1>complete</h1>
        {tasks.map((task => task.completed && (
              <div>
              <Grid {...classes.mainContainer} container key={task._id} item xs={12} sm={6} md={10}>
                <Task task={task} setCurrentId={setCurrentId} />
              </Grid>
              <span>&nbsp;</span>
              </div>
            ) 
          )
        )
      }
      </Grid>
      </Grid>
      )
      );
  }

  export default TaskDetail;