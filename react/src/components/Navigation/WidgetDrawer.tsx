import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListWidgetItem from "./WidgetDrawerItem";
import { WidgetMap } from "../../helpers/widget-map";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
    list: {
      padding: 0
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const WidgetDrawer: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List className={classes.list}>
        {Object.keys(WidgetMap).map((key: string) => (
          <ListWidgetItem key={key} name={key} />
        ))}
      </List>
    </Drawer>
  );
};

export default WidgetDrawer;