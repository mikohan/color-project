import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  paletteFooter: {
    backgroundColor: 'white',
    height: '5hv',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem',
  },
};

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <div>
        <footer className={this.props.classes.paletteFooter}>
          {paletteName}
          <span className={this.props.classes.emoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
