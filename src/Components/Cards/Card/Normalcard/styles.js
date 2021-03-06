import { makeStyles } from '@material-ui/core/styles';
import map from '../../../../assets/map.png';
export default makeStyles({
  
  media: {
    width: "50%",
    height: "50%",
    marginLeft: '15px',
    margin: '20px 20px',
    paddingTop: '60.25%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(51, 51, 51, 1)',
    backgroundImage: {map},
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  mediar: {
    width: "auto",
    height: "auto",
    marginLeft: '5px',
    margin: '20px 20px',
    paddingTop: '60.25%',
  },

  map: {
    height: '100%',
    width: '90%',
    marginLeft: '15px',
    borderRadius: 15,
    margin: '20px 20px',
    paddingTop: '56.25%',
  },
  border: {
    border: 'solid',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  black: {
    fontFamily: 'Poppins',
    fontSize: 22,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(51, 51, 51, 1)',
  },
  black1: {
    fontFamily: 'Poppins',
    fontSize: 18,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(51, 51, 51, 1)',
  },
  yellow: {
    fontFamily: 'Poppins',
    fontSize: 23,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(255, 218, 0, 1)',
  },
  red: {
    fontFamily: 'Poppins',
    fontSize: 23,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(236, 88, 99, 1)',
  },
  red1: {
    fontFamily: 'Poppins',
    fontSize: 18,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(236, 88, 99, 1)',
  },
  red2: {
    fontFamily: 'Poppins',
    fontSize: 30,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(236, 88, 99, 1)',
  },
  green: {
    fontFamily: 'Poppins',
    fontSize: 23,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(69, 191, 87, 1)',
  },
  brown: {
    fontFamily: 'Poppins',
    fontSize: 23,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(113, 112, 112, 1)',
  },
  orange: {
    fontFamily: 'Poppins',
    fontSize: 23,
    position: 'absolute',
    fontStyle: 'bold',
    fontWeight: 'fontWeightBold',
    color: 'rgba(255, 108, 82, 1)',
  },
  normal1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: 'rgba(51, 51, 51, 1)',

    
  },
  grid: {
    display: 'flex',
  },
});