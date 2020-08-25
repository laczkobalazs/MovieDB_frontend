import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

function NameComponent(props) {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const save = () => {
    handleClickOpen();
    setOpen(false);
    props.setName(name);
  };

  const setEnteredName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Chat</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            onChange={setEnteredName}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={save} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NameComponent;
