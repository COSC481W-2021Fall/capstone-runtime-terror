import React, { useState } from 'react';
import { Grid, Typography, Select, MenuItem,InputLabel, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Task from './Task/tasks';
import useStyles from './styles';

import { ThemeProvider } from 'styled-components';
import Burger from './Burger/';
import { StyledMenu } from './Menu/Menu.styled';
import { theme } from './theme';


const Dashboard = ({ setCurrentId, user }) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();
  const [sortByDateValue, setsortByDateValue] = useState('ascending');
  const [selectedCategory, setCategory] = useState('');
  const [sortByValue, setSortBy] = useState('category');
  const [sortByDateType, setSortByDateType] = useState('completeDate');
  const [catArray, setCatArray] = useState([]);
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSortDateChange = (event) => {
    setsortByDateValue(event.target.value);
  };

  const handleDateTypeChange = (event) => {
    setSortByDateType(event.target.value);
  };

  //filter tasks if a category is selected
  let filteredTasks = [];
  if (selectedCategory)
    filteredTasks = tasks.filter(task => task.category === selectedCategory)
  else
    filteredTasks = tasks;

  //sort tasks by complete_date
  const sortedComplete = (sortByDateValue === 'ascending') ?
    [...filteredTasks].sort((a, b) => Date.parse(a.complete_date) - Date.parse(b.complete_date))
    :
    [...filteredTasks].sort((a, b) => Date.parse(b.complete_date) - Date.parse(a.complete_date));

  //sort tasks by create_date
  const sortedCreate = (sortByDateValue === 'ascending') ?
    [...filteredTasks].sort((a, b) => Date.parse(a.create_date) - Date.parse(b.create_date))
    :
    [...filteredTasks].sort((a, b) => Date.parse(b.create_date) - Date.parse(a.create_date));


  //get unique categories from tasks
  function addCategory(category) {
    if (catArray.indexOf(category) === -1) {
      setCatArray([...catArray, category]);
    }
  }

  for (var i = 0; i < tasks.length; i++) {
    if ((tasks[i].todo !== true) && (tasks[i].completed !== true)) {
      addCategory(tasks[i].category);
    }
  }

  var taskCount = 0;
  for (var j = 0; j < tasks.length; j++) {
    if ((tasks[j].active === true)) {
      taskCount++;
    }
  }

  return (
    user ? (
      taskCount < 1 ? <Typography className={classes.Typography} variant="h3">You have no active tasks!</Typography>  : (
        <div className={classes.div}>
          <Grid style={open ? ({ paddingLeft: '300px' }) : ({})}id='main' className={classes.grid} container alignItems="flex-start" spacing={3}>
            {/* logic for sorting*/}
            {sortByDateType === "completeDate" ?
              (sortedComplete.map((task) => (
                task.active && (
                  <Grid key={task._id} item xs={12} sm={6} md={4}>
                    <Task task={task} setCurrentId={setCurrentId} />
                  </Grid>
                ))))
              : //else, sort by create date
              (sortedCreate.map((task) => (
                task.active && (
                  <Grid key={task._id} item xs={12} sm={6} md={4}>
                    <Task task={task} setCurrentId={setCurrentId} />
                  </Grid>
                ))))}
            </Grid>
            {/* Burger Menu */}
            <ThemeProvider theme={theme}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <StyledMenu className={classes.menu} open={open}>
                {<h1>Sort/Filter Tasks</h1>}
                {/* Radio Buttons */}
                <FormControl component="fieldset">
                  {(sortByValue === 'category') ? <FormLabel component="legend">Filter By:</FormLabel>
                    : <FormLabel component="legend">Sort By:</FormLabel>}
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
                </FormControl> {<br />}{<br />}
                {(sortByValue === 'category') ?
                  // {/*Category Dropdown*/}
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="categoryLabel">Select Category</InputLabel>
                    <Select
                      className={classes.dropdown}
                      labelId="categoryLabel"
                      label="Category"
                      value={selectedCategory}
                      onChange={handleChangeCategory}
                    >
                      <MenuItem value="">
                        <em>Get All Tasks</em>
                      </MenuItem>

                      {catArray.map((cat) => (
                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  :
                  <>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Sort By Date:</FormLabel>
                      <RadioGroup
                        row
                        aria-label="sortByDate"
                        defaultValue="ascending"
                        name="row-radio-buttons-group"
                        value={sortByDateType}
                        onChange={handleDateTypeChange}
                      >
                        <FormControlLabel value="completeDate" control={<Radio />} label="Complete Date" />
                        <FormControlLabel value="startDate" control={<Radio />} label="Start Date" />
                      </RadioGroup>
                    </FormControl> <br /><br />
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Ascending / Descending</FormLabel>
                      <RadioGroup
                        row
                        aria-label="sortByDate"
                        defaultValue="ascending"
                        name="row-radio-buttons-group"
                        value={sortByDateValue}
                        onChange={handleSortDateChange}
                      >
                        <FormControlLabel value="ascending" control={<Radio />} label="Ascending" />
                        <FormControlLabel value="descending" control={<Radio />} label="Descending" />
                      </RadioGroup>
                    </FormControl>
                  </>}
                {<br />}
                {<br />}
              </StyledMenu>
            </ThemeProvider>
        </div>
      )
    ) : (window.location.pathname = "/")
  );
}

export default Dashboard;