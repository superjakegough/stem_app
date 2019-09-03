import React, { FunctionComponent } from "react";

interface ContentDomProps {
  content: string;
  className?: string;
}

const ContentDom: FunctionComponent<ContentDomProps> = props => {
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.content }}
    ></div>
  );
};

export default ContentDom;
