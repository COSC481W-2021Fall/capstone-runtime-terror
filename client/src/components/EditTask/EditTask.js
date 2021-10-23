import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../EditTask/styles';
import { createPost } from '../../actions/posts';

const EditTask = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ author: '', title: '', description: '', category: '' });  //inializing post values
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null)); 
  const dispatch = useDispatch(); //Make a dispatch object 
  const classes = useStyles(); //make and object for the styles.js

  useEffect(() => {
    if (post) setPostData(post); //this grabs the informaion from the form and updates the post
  }, [post]);

  //Clears the form when the user hits clear
  const clear = () => {
    setCurrentId(0);
    setPostData({ author: '', title: '', description: '', category: '' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData)); //calls the funtion in actions/posts with the postData
      clear(); //Clears the form
    }
  };

  return (
    <div>
    <Typography className={classes.Typography} variant="h3">{currentId ? `Editing ""` : 'Create a Task'}</Typography> {/*This is the title it is set up to display the name of the task you are editing*/}
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 

        {/*Author this is the owner of the task. This is how we will set task to a user. we mnight be able to auto fill*/}
        <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
        
        {/*This is the name of the task*/}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        
        {/*Decription of task*/}
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
        
        {/*Put the task in what we are calling a sub task*/}
        <TextField name="category" variant="outlined" label="Category" fullWidth value={postData.category} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        
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

