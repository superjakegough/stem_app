import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import homeimage from "../assets/home.jpg";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Home: React.FunctionComponent = props => {
  const classes = useStyles({});
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const smallLogo = small ? (
      <Grid item sm={10} xs={12} className="mb-4">

      </Grid>
  ) : (
    undefined
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs>
          <img src={homeimage} className="header-image" alt=""/>
          <h1 className="header-text">Growing your business<br/>Growing your career</h1>
        </Grid>
        <Grid container justify="center" className="content-container">
          <Grid item md={8} sm={10} xs={12} className="mb-4">
            <h2 className="content-title">Who We Are</h2>
          </Grid>
          {smallLogo}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
