import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import servicesimage from "../assets/services.jpg";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Services: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={servicesimage} className="header-image" alt=""/>
          <div className="header-text">Services</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
