import { Card, CardActions, Button, Typography } from '@material-ui/core/';
import ArrowForwardIos from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AlarmIcon  from '@mui/icons-material/Alarm';
import moment from 'moment';
import useStyles from './styles';
import React from 'react';
import 'date-fns';

const Task = ({user}) => {
    const classes = useStyles();

    
    return (
        <Card className={classes.card}>
            <div >
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                <Typography variant="body2">{user.score}</Typography>
            </div>
        </Card>
    );
}

export default Task;
