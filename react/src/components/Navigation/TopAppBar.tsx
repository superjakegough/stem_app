import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ColorMenu from "./ColorMenu";
import WidgetDrawer from "../Navigation/WidgetDrawer";
import Spacer from "../Layout/Spacer";
import createMuiTheme, { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { UserTheme, setPrimary } from "../../helpers/theme-helper";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#212121",
      boxShadow: "none"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const TopAppBar: React.FunctionComponent = props => {
  const [theme, setTheme] = useState<ThemeOptions>(UserTheme);

  const handlePrimaryChange = (color: string) => {
    setTheme(setPrimary(theme, color));
  };

  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="primary" noWrap>
            Ampy App
          </Typography>
          <Spacer />
          <ColorMenu handlePrimaryChange={handlePrimaryChange}/>
        </Toolbar>
      </AppBar>
      <WidgetDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
      </ThemeProvider>
    </div>
  );
};

export default TopAppBar;