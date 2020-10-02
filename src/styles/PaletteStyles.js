import sizes from './sizes';

export const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteColors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: 1,
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginTop: '-15px',
      marginLeft: '-50px',
      textAlign: 'center',
      outline: 'none',
      border: 'none',
      background: 'rgba(225, 225, 225, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.3333%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};
