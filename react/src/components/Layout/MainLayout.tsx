import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useDrop } from "react-dnd";
import ItemTypes from "../../typings/item-types";
import {
  lgLayout,
  mdLayout,
  smLayout,
  xsLayout,
  xxsLayout,
  addWidget,
  checkDuplicate
} from "../../helpers/layout-helper";
import { WidgetMap } from "../../helpers/widget-map";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts: ReactGridLayout.Layouts = {
  lg: lgLayout,
  md: mdLayout,
  sm: smLayout,
  xs: xsLayout,
  xxs: xxsLayout
};

const MainLayout: React.FunctionComponent = props => {
  const [widgets, setWidgets] = useState<React.FunctionComponent[]>([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WidgetDrawerItem,
    drop(item: any) {
      if (checkDuplicate(item.name)) {
        addWidget(item.name);
        setWidgets([...widgets, WidgetMap[item.name]]);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  const backgroundColor = isOver ? "#7C7C7C" : "transparent";

  return (
    <div ref={drop} style={{ height: "81vh", backgroundColor: backgroundColor }}>
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {widgets}
      </ResponsiveGridLayout>
    </div>
  );
};

export default MainLayout;
