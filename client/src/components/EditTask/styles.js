
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
      
    },
  },
  paper: {
    backgroundColor: '#F76C6C',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#24305E',
  },
  buttonClear:{
    backgroundColor: '#F8E9A1',
    color: '#24305E',
    "&:hover": {
      background: "#FFFF8F"
    },
  },
  Typography: {
    margin: '20px 450px',
    color: '#24305E',
  },
  Typography: {
    margin: '20px 450px',
    color: '#24305E',
  },
}));