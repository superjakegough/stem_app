import React, { FunctionComponent } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const HideOnScroll: FunctionComponent = props => {
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      {props.children}
    </Slide>
  );
};

export default HideOnScroll;
