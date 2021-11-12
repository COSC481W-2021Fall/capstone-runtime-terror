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
import {deleteTask, updateTask} from '../../../actions/tasks';


const Task = ({task, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
    //const [complete, setComplete] = useState(false);
    //const [active, setActive] = useState(true);
    //const [todo, setTodo] = useState(false);
    const dispatch = useDispatch(); //Make a dispatch object 

    const update = () => {
        setCurrentId(task._id);
        history.push('/EditTask');
    };

   /* const isCompleted = () => {
        if(complete)
            setComplete(false);
        else
            setComplete(true);
            setActive(false);
            setTodo(false);
    };
    const isActive = () => {
        if(active)
            setActive(false);
        else
            setActive(true);
            setTodo(false);
            setComplete(false);
    };
    const isTodo = () => {
        if(todo)
            setTodo(false);
        else
            setTodo(true);
            setActive(false);
            setComplete(false);
    };*/
    const isCompleted = () => {
        task.todo = false;
        task.active = false;
        task.completed = true;
        task.complete_date = new Date();
        dispatch(updateTask(task._id, task, history));

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
           <div className={classes.details}>
               <Typography variant="body2">{task.title}</Typography>
               {!task.active ? (<Typography variant="body2" color="textSecondary">Not active</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Active</Typography>)}
               {!task.todo ? (<Typography variant="body2" color="textSecondary">Not Todo</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Todo</Typography>)}
               <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
           </div>
           <div className= {classes.details}>
               <Typography variant="body2" color="textSecondary">{task.category}</Typography>
               {!task.completed ? (<Typography variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Completed: {moment(new Date()).format('D MMM')}</Typography>)}
           </div>
           <CardContent>
               <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
               {/* <Button size ="small" color="primary" onClick={handelDeleteTask}>
                   <DeleteIcon fontSize="small"/>
                   Delete
               </Button> */}
               {/* <Button size ="small" color="primary" onClick ={update} >
                   <MoreVertIcon fontSize="default"/>
                   Update
               </Button> */}
               <Button size ="small" color="primary" onClick = {isCompleted}>
               <CheckCircleIcon fontSize="small"/>
                   Complete
               </Button>
               {/* <Button size ="small" color="primary" onClick = {isActive}>
               <CheckCircleIcon fontSize="small"/>
                   Active
               </Button> */}
               <Button size ="small" color="primary" onClick = {isTodo}>
               <CheckCircleIcon fontSize="small"/>
                   Todo
               </Button>
           </CardActions>
       </Card> 
             ) : task.todo ? (
                <Card className={classes.card}>
           <div className={classes.details}>
               <Typography variant="body2">{task.title}</Typography>
               {!task.active ? (<Typography variant="body2" color="textSecondary">Not active</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Active</Typography>)}
               {!task.todo ? (<Typography variant="body2" color="textSecondary">Not Todo</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Todo</Typography>)}
               <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
           </div>
           <div className= {classes.details}>
               <Typography variant="body2" color="textSecondary">{task.category}</Typography>
               {!task.completed ? (<Typography variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Completed: {moment(new Date()).format('D MMM')}</Typography>)}
           </div>
           <CardContent>
               <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
               {/* <Button size ="small" color="primary" onClick={handelDeleteTask}>
                   <DeleteIcon fontSize="small"/>
                   Delete
               </Button> */}
               {/* <Button size ="small" color="primary" onClick ={update} >
                   <MoreVertIcon fontSize="default"/>
                   Update
               </Button> */}
               <Button size ="small" color="primary" onClick = {isCompleted}>
               <CheckCircleIcon fontSize="small"/>
                   Complete
               </Button>
               <Button size ="small" color="primary" onClick = {isActive}>
               <CheckCircleIcon fontSize="small"/>
                   Active
               </Button>
               {/* <Button size ="small" color="primary" onClick = {isTodo}>
               <CheckCircleIcon fontSize="small"/>
                   Todo
               </Button> */}
           </CardActions>
       </Card> 
             ) : (
                <Card className={classes.card}>
           <div className={classes.details}>
               <Typography variant="body2">{task.title}</Typography>
               {!task.active ? (<Typography variant="body2" color="textSecondary">Not active</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Active</Typography>)}
               {!task.todo ? (<Typography variant="body2" color="textSecondary">Not Todo</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Todo</Typography>)}
               <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
           </div>
           <div className= {classes.details}>
               <Typography variant="body2" color="textSecondary">{task.category}</Typography>
               {!task.completed ? (<Typography variant="body2" color="textSecondary">Complete Date: {moment(task.complete_date).format('D MMM')}</Typography>)
                           : (<Typography variant="body2" color="textSecondary">Completed: {moment(new Date()).format('D MMM')}</Typography>)}
           </div>
           <CardContent>
               <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
               {/* <Button size ="small" color="primary" onClick={handelDeleteTask}>
                   <DeleteIcon fontSize="small"/>
                   Delete
               </Button> */}
               {/* <Button size ="small" color="primary" onClick ={update} >
                   <MoreVertIcon fontSize="default"/>
                   Update
               </Button> */}
               {/* <Button size ="small" color="primary" onClick = {isCompleted}>
               <CheckCircleIcon fontSize="small"/>
                   Complete
               </Button> */}
               <Button size ="small" color="primary" onClick = {isActive}>
               <CheckCircleIcon fontSize="small"/>
                   Active
               </Button>
               <Button size ="small" color="primary" onClick = {isTodo}>
               <CheckCircleIcon fontSize="small"/>
                   Todo
               </Button>
           </CardActions>
       </Card> 
             )
       
   );
}

export default Task;
