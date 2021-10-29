import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../EditTask/styles';
import { createTask, updateTask } from '../../actions/tasks';
import { useHistory } from 'react-router';

const EditTask = ({ currentId, setCurrentId, linkClicked, setlinkClicked }) => {
  const [taskData, settaskData] = useState({ title: '', description: '', category: '', create_date: new Date(), complete_date: new Date(), author: '', score: '1'});  //inializing task values
  const task = useSelector((state) => (currentId ? state.tasks.find((message) => message._id === currentId) : null)); 
  const dispatch = useDispatch(); //Make a dispatch object 
  const classes = useStyles(); //make and object for the styles.js
  const [selectedDate, setselectedDate] = useState(new Date());
  const history = useHistory();


  useEffect(() => {
    if (task) settaskData(task); //this grabs the informaion from the form and updates the task
  }, [task]);

  //Clears the form when the user hits clear
  const clear = () => {
    // setCurrentId(0);
    setselectedDate(new Date());
    settaskData({ title: '', description: '', category: '', create_date: new Date(), complete_date: new Date(), author: '', score: '1' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateTask(currentId, taskData, history));
      
    }else{
      dispatch(createTask(taskData, history)); //calls the funtion in actions/tasks with the taskData
    }
    clear(); //clears the form
  };

  const handleDateChange = (date) =>{
    setselectedDate(date);
    settaskData({ ...taskData, complete_date: date });
  };
  
  return (
    <div>
    {/* {linkClicked && (clear)} */}
    <Typography className={classes.Typography} variant="h3">{currentId ? `Editing Task: "${task.title}"` : 'Create a Task'}</Typography> {/*This is the title it is set up to display the name of the task you are editing*/}
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
     
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 

        {/*Author this is the owner of the task. This is how we will set task to a user. we mnight be able to auto fill*/}
        <TextField name="author" variant="outlined" label="Author" fullWidth value={taskData.author} onChange={(e) => settaskData({ ...taskData, author: e.target.value })} />
        
        {/*This is the name of the task*/}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => settaskData({ ...taskData, title: e.target.value })} />
        
        {/*Decription of task*/}
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={taskData.description} onChange={(e) => settaskData({ ...taskData, description: e.target.value })} />
        
        {/*Put the task in what we are calling a sub task*/}
        <TextField name="category" variant="outlined" label="Category" fullWidth value={taskData.category} onChange={(e) => settaskData({ ...taskData, category: e.target.value })} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyy'
              margin='normal'
              id= 'complete_date'
              label='Date to Complete'
              value= {selectedDate}
              onChange = {handleDateChange}
              KeyboardButtonProps={{
                'aria-label' : 'Change date'
              }}
            
            />
        </MuiPickersUtilsProvider>
        
        {/*Calls the methos that sends the informion to the backend */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        
        {/*Button to clear form*/}
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
      </Paper>
    </Container>
    </div>
  );
};

export default EditTask;

