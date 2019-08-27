import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Spacer from "./Spacer";
import Button from "@material-ui/core/Button";
import logo from "../assets/stem_green.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "none"
    },
    button: {
      margin: theme.spacing(1)
    },
    buttonLink: {
      textDecoration: "none"
    },
    logo: {
      marginRight: theme.spacing(3)
    },
  }),
);

const TopAppBar: React.FunctionComponent = props => {
  const classes = useStyles({});
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const topAppBar = small ? (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img className={classes.logo} src={logo} height="28" alt="" />
          <Spacer />
          <Typography variant="h6">
            Stem
          </Typography>
          <Spacer />
        </Toolbar>
      </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <img className={classes.logo} src={logo} height="28" alt="" />
        <Typography variant="h6">
          Stem
        </Typography>
        <Spacer />
        <Button className={classes.button} color="primary" component={Link} to="/">Home</Button>
        <Button className={classes.button} color="primary" component={Link} to="/services">Services</Button>
        <Button className={classes.button} color="primary" component={Link} to="/jobs">Jobs</Button>
        <Button className={classes.button} color="primary" component={Link} to="/blogs">Blogs</Button>
        <Spacer />
      </Toolbar>
    </AppBar>
  );

  return (
    <>
     {topAppBar}
    </>
  );
};

export default withRouter(TopAppBar);