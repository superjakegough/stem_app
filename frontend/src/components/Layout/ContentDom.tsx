import React from "react";
import { sanitize } from "dompurify";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

interface ContentDomProps {
  content: string;
  className?: string;
}

export default function ContentDom(props: ContentDomProps) {
  const classesBase = useStylesBase();
  const sanitisedHTML: string = sanitize(props.content);

  return (
    <div
      className={clsx(classesBase.contentDom, props.className)}
      dangerouslySetInnerHTML={{ __html: sanitisedHTML }}
    ></div>
  );
}
