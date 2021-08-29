import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handlChange = this.handlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // custom rule will have name 'isColorNameUnique'
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    // custom rule will have name 'isColorUnique'
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor(newColor) {
    this.setState({
      currentColor: newColor.hex,
    });
  }
  handlChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    const { updateCurrentColor, handleSubmit, handlChange } = this;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            value={newColorName}
            onChange={handlChange}
            name="newColorName"
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Color name required",
              "Color name must be Unique",
              "Color alredy taken",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: paletteIsFull ? "gray" : currentColor }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "PALETTE FULL" : "ADD COLOR"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default ColorPickerForm;