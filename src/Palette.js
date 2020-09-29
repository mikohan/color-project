import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.scss';

class Palette extends Component {
  constructor(props) {
    super();
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return (
        <ColorBox background={color.hex} name={color.name} key={color.id} />
      );
    });
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer eventually */}
      </div>
    );
  }
}

export default Palette;
