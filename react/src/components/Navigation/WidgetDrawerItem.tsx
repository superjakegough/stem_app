import React from "react";
import { useDrag } from "react-dnd";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PictureInPicture from "@material-ui/icons/PictureInPicture";
import ItemTypes from "../../typings/item-types";

interface WidgetDrawerItemProps {
  name: string;
}

const WidgetDrawerItem: React.FunctionComponent<WidgetDrawerItemProps> = ({ name }) => {
  const [, drag] = useDrag({ item: { name, type: ItemTypes.WidgetDrawerItem }});

  return (
    <div ref={drag}>
      <ListItem button key={name}>
        <ListItemIcon><PictureInPicture /></ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </div>
  );
};

export default WidgetDrawerItem;