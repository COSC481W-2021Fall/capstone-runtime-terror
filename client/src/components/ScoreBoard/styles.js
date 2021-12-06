import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '24305E'
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
    // marginRight: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#24305E',
    width: '400px',
    color: '#A8D0E6'
  },
  grid: {
    float: 'right',
    height: '50%',
    textAlign: 'center',
  },
  h1:{
    display: 'flex',
    textAlign: 'center',
  },Typography: {
    margin: '20px 450px',
    color: '#24305E',
  }
}));