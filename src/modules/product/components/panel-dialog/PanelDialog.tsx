import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PanelDialog = ({
  children,
  open,
  onClose,
}: {
  children: any;
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography>filter</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default PanelDialog;
