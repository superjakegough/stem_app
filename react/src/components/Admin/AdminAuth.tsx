import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Auth from "@aws-amplify/auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) => createStyles({
  textField: {
    marginBottom: theme.spacing(4),
    "& .MuiFilledInput-root": {
      borderRadius: 4
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: 0
    },
    "& .MuiFilledInput-underline:after": {
      marginRight: 2,
      marginLeft: 2,
      borderRadius: 4
    }
  }
}));

interface AdminAuthProps {
  handleSignedIn: () => void;
}

const AdminAuth: React.FunctionComponent<AdminAuthProps> = props => {
  const classes = useStyles({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const signIn = loading ? "Signing In" : "Sign In";

  function validateSignIn() {
    if (username && password) {
        return false;
      } else {
        return true;
      }
  }

  async function authSignIn() {
    setLoading(true);
    try {
      await Auth.signIn(username, password);
      props.handleSignedIn();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <div>
      <Grid direction="column" container justify="center" alignItems="center" className="content-container full-height">
        <Grid item md={3} sm={6} xs={10}>
          <TextField
            className={classes.textField}
            label="Username"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="filled"
            margin="dense"
            type="password"
            fullWidth
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item md={3} sm={6} xs={10}>
          <Grid container justify="center">
            <Button color="primary" disabled={validateSignIn() || loading} onClick={authSignIn}>{signIn}</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminAuth;
