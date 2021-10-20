import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormGroup,
  IconButton,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalProps> = ({ title, children, isVisible, onClose }) => {
  // const classes = useStyles((theme) => {});
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isVisible} onClose={onClose}>
      <DialogTitle id="form-dialog-title" style={{ padding: 5, margin: 0 }}>
        <IconButton>
          <CloseIcon onClick={onClose} style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent style={{ padding: 0, margin: 0 }}>
        <DialogContentText></DialogContentText>
        {children}
        <br />
        <br />
        <br />
      </DialogContent>
    </Dialog>
  );
};
