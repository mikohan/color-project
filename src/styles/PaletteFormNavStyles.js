import { DRAWER_WIDTH } from '../config';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

export const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: '1rem',
    [sizes.down('xs')]: {
      marginRight: '0.5',
    },
  },
  button: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      fontSize: '0.75rem',
      padding: '0.3rem',
    },
  },
  link: {
    textDecoration: 'none',
  },
  headerText: {
    [sizes.down('xs')]: {
      fontSize: '1rem',
    },
    [sizes.down('xxs')]: {
      display: 'none',
    },
  },
});
