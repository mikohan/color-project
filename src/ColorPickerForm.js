import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';

class ColorPickerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      currentColor: 'teal',
    };
  }

  updateCurrentColor(newColor) {
    console.log(newColor.hex);
    this.setState({ currentColor: newColor.hex });
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }
  render() {
    const { paletteIsFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            value={this.state.newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUique', 'isColorUique']}
            errorMessages={[
              'Enter a color name',
              'Color Name must be unique!',
              'Color Already Used',
            ]}
          />
          <div style={{ marginTop: '50px' }}></div>
          <Button
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull
                ? 'rgba(0,0,0,0.26)'
                : this.state.currentColor,
            }}
            type="submit"
          >
            {paletteIsFull ? 'Palette is Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
