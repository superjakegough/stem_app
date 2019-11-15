import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface LinkButtonProps {
  to: any;
  className?: string;
  children: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Button
      className={props.className}
      color="primary"
      component={Link}
      to={props.to}
    >
      {props.children}
    </Button>
  );
}
