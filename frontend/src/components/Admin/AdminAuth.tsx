import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Auth from "@aws-amplify/auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStylesBase } from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginBottom: theme.spacing(4),
      "& .MuiFilledInput-root": {
        borderRadius: 4
      },
      "& .MuiFilledInput-underline:after": {
        marginRight: 2,
        marginLeft: 2,
        borderRadius: 4
      }
    }
  })
);

interface AdminAuthProps {
  handleSignedIn: () => void;
}

const AdminAuth: FunctionComponent<AdminAuthProps> = props => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
      setLoading(false);
      props.handleSignedIn();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={clsx(classesBase.contentContainer, classesBase.fullHeight)}
      >
        <Grid item sm={6} xs={10}>
          <TextField
            className={classes.textField}
            label="Username"
            variant="filled"
            margin="dense"
            fullWidth
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="filled"
            margin="dense"
            type="password"
            fullWidth
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <Grid container justify="center">
            <Button
              color="primary"
              disabled={validateSignIn() || loading}
              onClick={authSignIn}
            >
              {signIn}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminAuth;
