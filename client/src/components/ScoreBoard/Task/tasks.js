import { Card, Typography } from '@material-ui/core/';
import useStyles from './styles';
import React from 'react';
import 'date-fns';

const Task = ({users}) => {
    const classes = useStyles();
    const currUser= JSON.parse(localStorage.getItem('profile'));
    
    return (
        currUser.result.email === users.email ? (
            <Card className={classes.card} style={{backgroundColor: "#F76C6C"}}>
                <div>
                    <Typography className={classes.title} style={{color: "#24305E"}}variant="h5" gutterBottom>{users.email}</Typography>
                    <Typography className={classes.typography} style={{color: "#F8E9A1"}} variant="h6">Score: {users.score}</Typography>
                </div>
            </Card>
        ):(
            <Card className={classes.card}>
                <div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{users.email}</Typography>
                    <Typography className={classes.typography} variant="h6">Score: {users.score}</Typography>
                </div>
            </Card>
        )
    );
}

export default Task;
