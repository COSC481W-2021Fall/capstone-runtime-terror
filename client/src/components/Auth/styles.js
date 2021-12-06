import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px 0',
    backgroundColor: '#F76C6C',

    
  },
 
 typography: {
  backgroundColor: '#24305E'
},
button: {
  backgroundColor: '#F76C6C',
},
buttonText: {
  backgroundColor: '#24305E',
},
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#24305E',
    "&:hover": {
      background: "#ABD0E6",
    },
  },
 


}));