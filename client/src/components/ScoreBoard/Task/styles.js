import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'grey',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // borderRadius: '15px',
    // height: '130px',
    position: 'relative',
    backgroundColor: '#F8E9A1', 
    width: '400px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    overflowWrap: 'break-word',
    margin: 'auto',
    color: '#F76C6C'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  typography: {
    color: '#24305E',
  },
  button: {
    color: '#F76C6C',
  },
  buttonText: {
    color: '#24305E',
  }
});