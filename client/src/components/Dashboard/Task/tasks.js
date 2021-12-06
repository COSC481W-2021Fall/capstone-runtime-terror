import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIos from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import useStyles from './styles';
import { useHistory } from 'react-router';
import React from 'react';
import 'date-fns';
import {useDispatch} from 'react-redux';
import {deleteTask, updateTask} from '../../../actions/tasks';
import { updateScore } from '../../../actions/auth';

const Task = ({task, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch(); //Make a dispatch object 
    
    const update = () => {
        setCurrentId(task._id);
        history.push('/EditTask'); //This one need to to be history or edit task wont work
    };

    const isCompleted = () => {
        task.todo = false;
        task.active = false;
        task.completed = true;
        task.complete_date = new Date();
        dispatch(updateTask(task._id, task, history));
        const user = JSON.parse(localStorage.getItem('profile'));
        dispatch(updateScore(user.result.email, user, history));
        window.location.reload(false);
    };

    const handelDeleteTask = () => {
        dispatch(deleteTask(task._id));
        window.location.reload(false);
    };

    const toDo = () => {
        task.todo = true;
        task.active = false;
        task.completed = false;
        dispatch(updateTask(task._id, task, history));
        window.location.reload(false);
    }
   
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2">{task.title}</Typography>
                <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
            </div>
            <div className= {classes.details}>
                <Typography className={classes.category} variant="body2" color="textSecondary">{task.category}</Typography>
                <Typography className={classes.complete} variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>
            </div>
            <CardContent>
                <Typography className ={classes.description}  variant="h5" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button 
                    className={classes.cardAction} size ="small" color="primary" onClick={handelDeleteTask}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Button
                    className={classes.cardAction} size ="small" color="primary" onClick ={update} >
                    <MoreVertIcon fontSize="medium"/>
                    Update
                </Button>
                <Button 
                    className={classes.cardAction} size ="small" color="primary" onClick = {toDo}>
                <ArrowForwardIos fontSize="small"/>
                    To-Do
                </Button>
                <Button 
                    className={classes.cardAction} size ="small" color="primary" onClick = {isCompleted}>
                <CheckCircleIcon fontSize="small"/>
                    Complete
                </Button>
            </CardActions>
        </Card> 
    );

}

export default Task;
