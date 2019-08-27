import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import BrushIcon from "@material-ui/icons/Brush";
import Menu from "@material-ui/core/Menu";
import { CirclePicker } from "react-color";

interface ColorMenuProps {
  handlePrimaryChange: (color: string) => void;
}

const ColorMenu: React.FunctionComponent<ColorMenuProps> = props => {
  const [anchorEl, setAnchorEl] = React.useState<undefined | HTMLElement>(undefined);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(undefined);
  }

  return (
    <div>
      <IconButton onClick={handleClick} color="primary">
        <BrushIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CirclePicker color="primary" onChangeComplete={() => props.handlePrimaryChange}/>
      </Menu>
    </div>
  );
};

export default ColorMenu;