import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import './Palette.scss';

class Palette extends Component {
  constructor(props) {
    super();
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={id}
          showFullPalette={true}
        />
      );
    });
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
