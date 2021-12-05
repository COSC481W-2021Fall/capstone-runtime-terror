import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../EditTask/styles';
import { createTask, updateTask} from '../../actions/tasks';
import { useHistory } from 'react-router';

const EditTask = ({ currentId, setCurrentId, user }) => {
  const [taskData, settaskData] = useState({ title: '', description: '', category: '', create_date: new Date(), complete_date: new Date(), author: user.result.email, score: '1'});  //inializing task values
  const task = useSelector((state) => (currentId ? state.tasks.find((message) => message._id === currentId) : null)); 
  const dispatch = useDispatch(); //Make a dispatch object 
  const classes = useStyles(); //make and object for the styles.js
  const [selectedDate, setselectedDate] = useState(new Date());
  const history = useHistory();

  console.log(user);
  useEffect(() => {
    if (task) settaskData(task); //this grabs the informaion from the form and updates the task
  }, [task]);

  //Clears the form when the user hits clear
  const clear = () => {
    setCurrentId(0);
    setselectedDate(new Date());
    settaskData({ title: '', description: '', category: '', create_date: new Date(), complete_date: new Date(), author: user.result.email, score: '1' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (taskData.complete_date.getUTCDate()>=new Date().getUTCDate() && taskData.complete_date.getUTCMonth()>=new Date().getUTCMonth() && taskData.complete_date.getUTCFullYear()>=new Date().getUTCFullYear()){
      if (currentId) {
        dispatch(updateTask(currentId, taskData, history));
        
      }else{
        //calls the funtion in actions/tasks with the taskData
        dispatch(createTask(taskData, history));
      } 
      clear();
    } else {
      window.alert('Date passed ;)');
    } 
  };

  const handleDateChange = (date) =>{
    setselectedDate(date); 
    settaskData({ ...taskData, complete_date: date });
  };
  
  return (
    user ? (
      <div>
      {/* {linkClicked && (clear)} */}
      <Typography className={classes.Typography} variant="h3">{currentId ? `Editing Task: "${task.title}"` : 'Create a Task'}</Typography> 
      {/* This is the title it is set up to display the name of the task you are editing */}
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
      
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
          
          {/*This is the name of the task*/}
          <TextField style={{backgroundColor: "#F3CFC6"}} name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => settaskData({ ...taskData, title: e.target.value })} />
          
          {/*Decription of task*/}
          <TextField style={{backgroundColor: "#F3CFC6"}} name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={taskData.description} onChange={(e) => settaskData({ ...taskData, description: e.target.value })} />
          
          {/*Put the task in what we are calling a sub task*/}
          <TextField style={{backgroundColor: "#F3CFC6"}} name="category" variant="outlined" label="Category" fullWidth value={taskData.category} onChange={(e) => settaskData({ ...taskData, category: e.target.value })} />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='MM/dd/yyy'
                margin='normal'
                id= 'complete_date'
                label='Date to Complete'
                value={currentId ? taskData.complete_date : selectedDate}
                onChange = {handleDateChange}
                KeyboardButtonProps={{
                  'aria-label' : 'Change date'
                }}
              
              />
          </MuiPickersUtilsProvider>
          
          {/*Calls the methos that sends the informion to the backend */}
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          
          {/*Button to clear form*/}
          <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
      </Container>
      </div>
    ) : (window.location.pathname = "/")
  );
};

export default EditTask;
