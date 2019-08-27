import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import home from "../assets/home.jpg";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Home: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={home} className="header-image" alt=""/>
          <div className="header-text">Growing your business<br/>Growing your career</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
