import React from "react";
import Link from "next/link";
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
    >
      <Link href={props.to}>{props.children}</Link>
    </Button>
  );
}
