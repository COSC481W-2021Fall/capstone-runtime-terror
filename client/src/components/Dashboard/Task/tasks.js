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
    // const task = useSelector((state) => (currentId ? state.tasks.find((message) => message._id === currentId) : null));

    const update = () => {
        setCurrentId(task._id);
        history.push('/EditTask');
    };

    const isCompleted = () => {
        // document.getElementById("complete_date").innerHTML = Date().toString();
        // setComplete(true);
    };

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
                {complete &&  (
                <>
                    <Typography id ='complete_date' variant="body2"></Typography>
                </>
                )}
            </div>
            <div className= {classes.details}>
                <Typography variant="body2" color="textSecondary">{task.category}</Typography>
            </div>
            <CardContent>
                <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size ="small" color="primary" onClick={() => dispatch(deleteTask(task._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Button size ="small" color="primary" onClick ={update} >
                    <MoreVertIcon fontSize="default"/>
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
