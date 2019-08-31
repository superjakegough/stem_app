import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1)
  }
}));

const AdminAuth: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const signIn = loading ? "Signing In" : "Sign In";

  return (
    <div>
      <Grid container justify="center" className="content-container">
        <Grid item md={8} sm={10} xs={12} className="mb-24">
          <></>
        </Grid>
        <Grid container justify="center" className="mb-24">
          <Button className={classes.button} color="primary" disabled={loading}>{signIn}</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminAuth;
