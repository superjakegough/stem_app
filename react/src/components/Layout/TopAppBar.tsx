import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "../assets/stem_green.png";
import facebooklogo from "../assets/facebook.svg";
import instagramlogo from "../assets/instagram.svg";
import linkedinlogo from "../assets/linkedin.svg";
import twitterlogo from "../assets/twitter.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "none"
    },
    button: {
      margin: theme.spacing(1)
    },
    logo: {
      marginRight: theme.spacing(3)
    },
    menuImage: {
      margin: "auto"
    },
    moreButton: {
      marginRight: -22
    }
  }),
);

const TopAppBar: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<undefined | HTMLElement>(undefined);
  const facebook: string = "https://facebook.com/Stem-Skills-Recruitment-Ltd-107387030612608";
  const twitter: string = "https://twitter.com/StemRecruitLtd";
  const linkedIn: string = "https://linkedin.com/company/stem-skills-recruitment-ltd/";
  const instagram: string = "https://instagram.com/stemskillsrecruitment";

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose () {
    setAnchorEl(undefined);
  }

  function handleSocialClick (url: string) {
    window.open(url);
  }

  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const topAppBar = smAndDown ? (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container>
              <img src={logo} height="28" alt="" />
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="center">
              <Typography variant="h6">
                Stem
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton className={classes.moreButton} color="primary" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => handleSocialClick(facebook)}>
                  <img className={classes.menuImage} src={facebooklogo} height="24" alt=""/>
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(twitter)}>
                  <img className={classes.menuImage} src={twitterlogo} height="24" alt=""/>
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(linkedIn)}>
                  <img className={classes.menuImage} src={linkedinlogo} height="24" alt=""/>
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(instagram)}>
                  <img className={classes.menuImage} src={instagramlogo} height="24" alt=""/>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container direction="row">
              <img className={classes.logo} src={logo} height="28" alt="" />
              <Typography variant="h6">
                Stem
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="center">
              <Button className={classes.button} color="primary" component={Link} to="/">Home</Button>
              <Button className={classes.button} color="primary" component={Link} to="/services">Services</Button>
              <Button className={classes.button} color="primary" component={Link} to="/jobs">Jobs</Button>
              <Button className={classes.button} color="primary" component={Link} to="/blogs">Blogs</Button>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton color="primary" onClick={() => handleSocialClick(facebook)}>
                <img src={facebooklogo} height="24" alt=""/>
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(twitter)}>
                <img src={twitterlogo} height="24" alt=""/>
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(linkedIn)}>
                <img src={linkedinlogo} height="24" alt=""/>
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(instagram)}>
                <img src={instagramlogo} height="24" alt=""/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <div>
     {topAppBar}
    </div>
  );
};

export default withRouter(TopAppBar);