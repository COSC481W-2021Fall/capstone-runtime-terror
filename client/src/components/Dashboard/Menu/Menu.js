import { Select, MenuItem, InputLabel, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';


import React, {useState} from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import useStyles from './../styles';


const Menu = ({ open }) => {
const classes = useStyles();
const [sortByValue, setSortBy] = React.useState('category');
const [selectedCategory, setCategory] = React.useState('');
const [sortByDateType, setSortByDateType] = React.useState('completeDate');
const [sortByDateValue, setsortByDateValue] = React.useState('ascending');
const [catArray, setCatArray] = useState([]);



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
  return (
    <StyledMenu open={open}>
      <form className={classes.buttonDiv}>
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
                  <MenuItem value={cat}>{cat}</MenuItem>
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
              </>
            }
            {<br />}
            {<br />}
          </form>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;