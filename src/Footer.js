import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles/FooterStyles';

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
