import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

class ColorPickerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      currentColor: 'teal',
      newColorName: '',
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUique', (value) => {
      const chk = this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
      return chk;
    });
    ValidatorForm.addValidationRule('isColorUique', (value) => {
      const chk = this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
      return chk;
    });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };

    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateCurrentColor(newColor) {
    console.log(newColor.hex);
    this.setState({ currentColor: newColor.hex });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
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
                : currentColor,
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
