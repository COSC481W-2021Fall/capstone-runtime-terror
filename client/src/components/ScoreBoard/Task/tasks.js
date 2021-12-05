import { Card, Typography } from '@material-ui/core/';
import useStyles from './styles';
import React from 'react';
import 'date-fns';

const Task = ({user}) => {
    const classes = useStyles();
    const currUser= JSON.parse(localStorage.getItem('profile'));
    console.log(currUser.result.email === user.email);
    
    return (
        currUser.result.email === user.email ? (
            <Card className={classes.card} style={{backgroundColor: "#F76C6C"}}>
                <div>
                    <Typography className={classes.title} style={{color: "#24305E"}}variant="h5" gutterBottom>{user.email}</Typography>
                    <Typography className={classes.typography} style={{color: "#F8E9A1"}} variant="h6">Score: {user.score}</Typography>
                </div>
            </Card>
        ):(
            <Card className={classes.card}>
                <div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{user.email}</Typography>
                    <Typography className={classes.typography} variant="h6">Score: {user.score}</Typography>
                </div>
            </Card>
        )
    );
}

export default Task;
