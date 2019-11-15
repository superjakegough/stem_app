import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

interface HideOnScrollProps {
  children: React.ReactNode;
}

export default function HideOnScroll(props: HideOnScrollProps) {
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      {props.children}
    </Slide>
  );
}
