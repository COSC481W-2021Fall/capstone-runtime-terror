import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import moment from 'moment';
import useStyles from './styles';
import { useHistory } from 'react-router';
import React, { useState } from 'react';
import 'date-fns';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../../actions/tasks';

const Task = ({task, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch(); //Make a dispatch object 

    const update = () => {
        setCurrentId(task._id);
        history.push('/EditTask');
    };

    const isCompleted = () => {
        if(complete)
            setComplete(false);
        else
            setComplete(true);
    };

    const handelDeleteTask = () => {
        dispatch(deleteTask(task._id));
        window.location.reload(false);
    };

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2">{task.title}</Typography>
                <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
            </div>
            <div className= {classes.details}>
                <Typography variant="body2" color="textSecondary">{task.category}</Typography>
                {!complete ? (<Typography variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                            : (<Typography variant="body2" color="textSecondary">Completed: {moment(new Date()).format('D MMM')}</Typography>)}
            </div>
            <CardContent>
                <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size ="small" color="primary" onClick={handelDeleteTask}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Button size ="small" color="primary" onClick ={update} >
                    <MoreVertIcon fontSize="medium"/>
                    Update
                </Button>
                <Button size ="small" color="primary" onClick = {isCompleted}>
                <CheckCircleIcon fontSize="small"/>
                    Complete
                </Button>
            </CardActions>
        </Card> 

    );
}

export default Task;
