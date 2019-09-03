import React, { FunctionComponent } from "react";
import { sanitize } from "dompurify";

interface ContentDomProps {
  content: string;
  className?: string;
}

const ContentDom: FunctionComponent<ContentDomProps> = props => {
  const sanitisedHTML: string = sanitize(props.content);

  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: sanitisedHTML }}
    ></div>
  );
};

export default ContentDom;
