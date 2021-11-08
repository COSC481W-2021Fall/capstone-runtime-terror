import React, { useState } from 'react';
import { Grid, CircularProgress, Button, TextField, Select, MenuItem, InputLabel, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


import { useSelector } from 'react-redux';

import Task from './Task/tasks';
import useStyles from './styles';


const Dashboard = ({setCurrentId}) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();
  const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedCategory, setCategory] = React.useState('');
  const [sortByValue, setSortBy] = React.useState('category');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (date) =>{
    setselectedDate(date); 
  };

  return (
    !tasks.length ? <CircularProgress /> : (
      <div>
        <form className={classes.buttonDiv}>
          {<h1>Sort Tasks</h1>}
          {/* Radio Buttons */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Sort By:</FormLabel>
            <RadioGroup
              row 
              aria-label="sortBy"
              defaultValue="category"
              name="row-radio-buttons-group"
              value={sortByValue}
              onChange={handleSortChange}
            >
              <FormControlLabel value="category" control={<Radio />} label="Category" />
              <FormControlLabel value="date" control={<Radio />} label="Date" />
            </RadioGroup>
          </FormControl> {<br/>}{<br/>}
          {(sortByValue === 'category') ? 
          // {/*Category Dropdown*/}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="categoryLabel">Category</InputLabel>
                <Select  
                  className={classes.dropdown} 
                  labelId="categoryLabel" 
                  label="Category"
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {tasks.map((task) => (
                  <MenuItem value={task.category}>{task.category}</MenuItem>
                ))}
                </Select>
            </FormControl>  
          : 
          // {/*Date Picker*/}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyy'
              margin='normal'
              id= 'complete_date'
              label='Date to Sort'
              value= {selectedDate}
              onChange = {handleDateChange}
              KeyboardButtonProps={{
                'aria-label' : 'Change date'
              }}
            />
          </MuiPickersUtilsProvider> 
        }
                        
            {/* <TextField name="author" variant="outlined" label="Test" value={sortByValue} />{<br/>}{<br/>} */} 
            {<br/>}
            {<br/>}
            <Button variant="outlined" color="primary" type="submit">Sort</Button>{<br/>}{<br/>}
            <Button variant="contained" color="primary" type="submit">Get All Tasks</Button> 
        </form>

        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {tasks.map((task) => (
            <Grid key={task._id} item xs={12} sm={6} md={4}>
              <Task task={task} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
    );
}

export default Dashboard;