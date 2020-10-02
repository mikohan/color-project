import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { styles } from './styles/ColorBoxStyles';
import classNames from 'classnames';

class ColorBox extends Component {
  constructor(props) {
    super();
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const {
      name,
      background,
      paletteId,
      id,
      showFullPalette,
      classes,
    } = this.props;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
          />

          <div
            className={classNames(classes.copyMessage, {
              [classes.showMesagge]: copied,
            })}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>COPY</button>
          </div>
          {showFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
