import { Card, CardActions, Button, Typography } from '@material-ui/core/';
import ArrowForwardIos from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AlarmIcon  from '@mui/icons-material/Alarm';
import moment from 'moment';
import useStyles from './styles';
import { useHistory } from 'react-router';
import React from 'react';
import 'date-fns';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../actions/tasks';
import { updateScore } from '../../../actions/auth';


const Task = ({task}) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch(); //Make a dispatch object 

    const isCompleted = () => {
        task.todo = false;
        task.active = false;
        task.completed = true;
        task.complete_date = new Date();
        dispatch(updateTask(task._id, task, history));
        const user = JSON.parse(localStorage.getItem('profile'));
        user.result.score += 1;
        localStorage.setItem('profile', JSON.stringify(user));
        dispatch(updateScore(user.result.email, user, history));

    };
    const isActive = () => {
        task.todo = false;
        task.active = true;
        task.completed = false;
        //task.complete_date = new Date();
        dispatch(updateTask(task._id, task, history));

    };
    const isTodo = () => {
        task.todo = true;
        task.active = false;
        task.completed = false;
        //task.complete_date = new Date();
        dispatch(updateTask(task._id, task, history));

    };

    return (
        task.active ? (
            <Card className={classes.card}>
                <div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{task.title}</Typography>
                </div>
                <div >
                    <Typography className={classes.typography} variant="body2" color="textSecondary">{task.category}</Typography>
                    <Typography className={classes.typography} variant="body2">{moment(task.create_date).fromNow()}</Typography>
                    {!task.completed ? (<Typography className={classes.typography} variant="body2" >Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                        : (<Typography className={classes.typography} variant="body2" >Completed: {moment(new Date()).format('D MMM')}</Typography>)}
                </div>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="default" onClick={isTodo}>
                        <ArrowForwardIos className={classes.button} fontSize="small" />
                        <div className={classes.buttonText}>
                            Todo
                        </div>
                    </Button>
                    <Button size="small" color="default" onClick={isCompleted}>
                        <CheckCircleIcon className={classes.button} fontSize="small" />
                        <div className={classes.buttonText}>
                            Complete
                        </div>
                    </Button>
                </CardActions>
            </Card>
        ) : task.todo ? (
            <Card className={classes.card}>
                <div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{task.title}</Typography>
                </div>
                <div >
                    <Typography className={classes.typography} variant="body2" color="textSecondary">{task.category}</Typography>
                    <Typography className={classes.typography} variant="body2">{moment(task.create_date).fromNow()}</Typography>
                    {!task.completed ? (<Typography className={classes.typography} variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                        : (<Typography className={classes.typography} variant="body2" color="textSecondary">Completed: {moment(new Date()).format('D MMM')}</Typography>)}
                </div>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="default" onClick={isActive}>
                        <AlarmIcon className={classes.button} fontSize="small" />
                        <div className={classes.buttonText}>
                            Active
                        </div>
                    </Button>
                    <Button size="small" color="default" onClick={isCompleted}>
                        <CheckCircleIcon className={classes.button} fontSize="small" />
                        <div className={classes.buttonText}>
                            Complete
                        </div>
                    </Button>
                </CardActions>
            </Card>
        ) : (   //complete column
            <Card className={classes.card}>
                <div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{task.title}</Typography>
                </div>
                <div >
                    <Typography className={classes.typography} variant="body2" color="textSecondary">{task.category}</Typography>
                    <Typography className={classes.typography} variant="body2">{moment(task.create_date).fromNow()}</Typography>
                    {!task.completed ? (<Typography className={classes.typography} variant="body2" >Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                        : (<Typography className={classes.typography} variant="body2" >Completed: {moment(new Date()).format('D MMM')}</Typography>)}
                </div>
            </Card>
        )

    );
}

export default Task;
