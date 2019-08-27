import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
);

const Home: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <Container>
      <Box my={4}>
        <div>hello</div>
      </Box>
    </Container>
  );
};

export default Home;