import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },  
  paper: {
    padding: theme.spacing(2),
    margin: '20px 0',
  },
  buttonDiv: {
    textAlign: 'left',
    margin: theme.spacing(5),
  },
  dropdown: {
    width:200,
  },
}));