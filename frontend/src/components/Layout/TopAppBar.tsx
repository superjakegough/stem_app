import React, { FunctionComponent, useState, MouseEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkButton from "../Layout/LinkButton";
import logo from "../../assets/stem_green.png";
import facebooklogo from "../../assets/facebook.svg";
import instagramlogo from "../../assets/instagram.svg";
import linkedinlogo from "../../assets/linkedin.svg";
import twitterlogo from "../../assets/twitter.svg";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "none"
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
  })
);

interface TopAppBarProps {
  window?: () => Window;
  children: React.ReactElement;
}

const TopAppBar: FunctionComponent = props => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(
    undefined
  );
  const facebook: string =
    "https://facebook.com/Stem-Skills-Recruitment-Ltd-107387030612608";
  const twitter: string = "https://twitter.com/StemRecruitLtd";
  const linkedIn: string =
    "https://linkedin.com/company/stem-skills-recruitment-ltd/";
  const instagram: string = "https://instagram.com/stemskillsrecruitment";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(undefined);
  }

  function handleSocialClick(url: string) {
    window.open(url);
  }

  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
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
              <h6>Stem</h6>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton
                className={classes.moreButton}
                color="primary"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleSocialClick(facebook)}>
                  <img
                    className={classes.menuImage}
                    src={facebooklogo}
                    height="24"
                    alt=""
                  />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(twitter)}>
                  <img
                    className={classes.menuImage}
                    src={twitterlogo}
                    height="24"
                    alt=""
                  />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(linkedIn)}>
                  <img
                    className={classes.menuImage}
                    src={linkedinlogo}
                    height="24"
                    alt=""
                  />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(instagram)}>
                  <img
                    className={classes.menuImage}
                    src={instagramlogo}
                    height="24"
                    alt=""
                  />
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
            <Grid container alignItems="center">
              <img className={classes.logo} src={logo} height="28" alt="" />
              <h6>Stem</h6>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="center" wrap="nowrap">
              <LinkButton
                className={classesBase.button}
                to="/"
              >
                Home
              </LinkButton>
              <LinkButton
                className={classesBase.button}
                to="/services"
              >
                Services
              </LinkButton>
              <LinkButton
                className={classesBase.button}
                to="/jobs"
              >
                Jobs
              </LinkButton>
              <LinkButton
                className={classesBase.button}
                to="/blogs"
              >
                Blogs
              </LinkButton>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton
                color="primary"
                onClick={() => handleSocialClick(facebook)}
              >
                <img src={facebooklogo} height="24" alt="" />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => handleSocialClick(twitter)}
              >
                <img src={twitterlogo} height="24" alt="" />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => handleSocialClick(linkedIn)}
              >
                <img src={linkedinlogo} height="24" alt="" />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => handleSocialClick(instagram)}
              >
                <img src={instagramlogo} height="24" alt="" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return <div>{topAppBar}</div>;
};

export default TopAppBar;
