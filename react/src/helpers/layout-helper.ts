import ReactGridLayout from "react-grid-layout";

export const lgLayout: ReactGridLayout.Layout[] = [];

export const mdLayout: ReactGridLayout.Layout[] = [];

export const smLayout: ReactGridLayout.Layout[] = [];

export const xsLayout: ReactGridLayout.Layout[] = [];

export const xxsLayout: ReactGridLayout.Layout[] = [];

export const addWidget = (key: string) => {
  const widget: ReactGridLayout.Layout = {
    i: key,
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    minW: 2
  };
  lgLayout.push(widget);
  mdLayout.push(widget);
  smLayout.push(widget);
  xsLayout.push(widget);
  xxsLayout.push(widget);
};

export const deleteWidget = (key: string) => {
  lgLayout.filter((widget: ReactGridLayout.Layout) => widget.i !== key);
  mdLayout.filter((widget: ReactGridLayout.Layout) => widget.i !== key);
  smLayout.filter((widget: ReactGridLayout.Layout) => widget.i !== key);
  xsLayout.filter((widget: ReactGridLayout.Layout) => widget.i !== key);
  xxsLayout.filter((widget: ReactGridLayout.Layout) => widget.i !== key);
};

export const checkDuplicate = (key: string) => {
  let duplicate = true;
  for (let i = 0; i < lgLayout.length; i++) {
    if (lgLayout[i].i === key) {
      duplicate = false;
      break;
    }
  }
  return duplicate;
};