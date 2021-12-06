import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#F8E9A1', 
    color: '#24305E',
  },
  grid: {
    display: 'flex',
    height: '300px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: '#24305E',
  },
  category: {
    color: '#24305E',
  },
  complete: {
    color: '#24305E',
  },
  description: {
    padding: '0 16px',
    color: '#F76C6C',
    overflowWrap: 'break-word',
    whiteSpace: 'break-spaces',
  },
  cardActions: {
    padding: '0 4px 20px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    primary: 'black',
  },
  cardAction: {
    color: '#24305E',
    "&:hover": {
      backgroundColor: "#F76C6C"
    },
  },
});