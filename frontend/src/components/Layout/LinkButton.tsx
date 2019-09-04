import React, { FunctionComponent, ReactElement } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface LinkButtonProps extends RouteComponentProps {
  to: any;
  className?: string;
  children: string;
}

const LinkButton: FunctionComponent<LinkButtonProps> = props => {
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
};

export default withRouter(LinkButton);
