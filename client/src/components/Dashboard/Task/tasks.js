import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import moment from 'moment';
import useStyles from './styles';
import { useHistory } from 'react-router';

const Task = ({task, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();

    const update = () => {
        setCurrentId(task._id);
        history.push('/EditTask');
    };

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2">{moment(task.create_date).fromNow()}</Typography>
            </div>
            <div className= {classes.details}>
                <Typography variant="body2" color="textSecondary">{task.category}</Typography>
            </div>
            <CardContent>
                <Typography className ={classes.title}  variant="h5" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size ="small" color="primary" onClick = {() =>{}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Button size ="small" color="primary" onClick ={update} >
                    <MoreVertIcon fontSize="default"/>
                    Update
                </Button>
                <Button size ="small" color="primary" onClick = {() =>{}}>
                <CheckCircleIcon fontSize="small"/>
                    Complete
                </Button>

            </CardActions>

        </Card> 

    );
}

export default Task;