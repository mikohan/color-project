export const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '8vh',
  },

  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      color: 'black',
      textDecoration: 'none',
    },
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-handle': {
      backgroundColor: 'green',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px',
    },
    '& .select-container': {
      marginLeft: 'auto',
      marginRight: '1rem',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};
