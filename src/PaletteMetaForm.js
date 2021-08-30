import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { emojiIndex, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };
    this.handlChange = this.handlChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }
  componentDidMount() {
    // custom rule will have name 'isPaletteNameUnique'
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handlChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  showEmojiPicker() {
    this.setState({
      stage: "emoji",
    });
  }
  addEmoji(emoji) {
    console.log(emoji);
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
  }
  render() {
    const { showEmojiPicker, handlChange, addEmoji } = this;
    const { stage, newPaletteName } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">
            Choose a Palette Emoji{" "}
          </DialogTitle>
          <Picker
            title="Pick your emoji…"
            emoji="point_up"
            onSelect={addEmoji}
          />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name{" "}
          </DialogTitle>
          <ValidatorForm onSubmit={showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your beautifull palette. Make sure it's
                unique.
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                fullWidth
                margin="normal"
                name="newPaletteName"
                onChange={handlChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette Name required",
                  "Palette name is taken",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
export default PaletteMetaForm;
