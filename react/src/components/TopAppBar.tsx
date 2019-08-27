import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Spacer from "./Spacer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <img className={classes.logo} src={logo} height="28" alt="" />
        <Typography variant="h6" noWrap>
          Stem
        </Typography>
        <Spacer />
        <Link to="/" className={classes.buttonLink}>
          <Button className={classes.button} color="primary">Home</Button>
        </Link>
        <Link to="/services" className={classes.buttonLink}>
          <Button className={classes.button} color="primary">Services</Button>
        </Link>
        <Link to="/jobs" className={classes.buttonLink}>
          <Button className={classes.button} color="primary">Jobs</Button>
        </Link>
        <Link to="/blogs" className={classes.buttonLink}>
          <Button className={classes.button} color="primary">Blogs</Button>
        </Link>
        <Spacer />
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;