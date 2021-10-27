//import './../../../App.css';
//import {useState} from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { mergeClasses } from '@material-ui/styles';
import moment from 'moment';
import useStyles from './styles';


function Task({task}) {
    const classes = useStyles();
    //const [completed, setcompleted] = useState(false);

    const isCompleted = () => {
        
        //setcompleted(e.target.checked)
        const checkBox =  document.getElementById('completed');
        const complete_date = document.getElementById('complete_date');
        const currDate = moment().format("MM-DD-YYYY hh:mm:ss");
        console.log(currDate);
        //console.log("Checkbox Data: ", completed);
        console.log("Checkbox Data 2: ", checkBox.checked);
        if (checkBox.checked === true){
           complete_date.innerHTML = "Completed! "+currDate;
          } else {
            complete_date.innerHTML = "Not Completed";
          }
    };
    return(
        <Card className={mergeClasses.card}> 
            <div className={classes.details}>
                <Typography variant="body2">{/*  {moment(task.create_date).fromNow()} */} Date Created </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">{/* {task.category} */}Category</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{/*{task.title} */}Title</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{/* {task.description} */}Description</Typography>
            </CardContent>
            <div className={classes.details}>
            <Typography style={{ marginBottom: 12, }} color="textSecondary" variant="body2">{/* {task.score} */}Score</Typography>
            <Typography id ="complete_date" style={{ marginBottom: 12, }} color="textSecondary" variant="body2">{/* {task.complete_date} */}Complete Date</Typography>
            <Typography style={{ marginBottom: 12, }} color="textSecondary" variant="body2"> {/* {task.author} */} Author</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
                <label>Completed: <input type="checkbox"
                id="completed" 
                //onChange ={ (e) => setcompleted(e.target.checked) }
                onClick = { isCompleted }/> </label>
            </CardActions>
        </Card>
    )
}

export default Task;