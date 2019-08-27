import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TopAppBar from "./TopAppBar";
import "./App.css";

export default function App() {
  return (
    <TopAppBar>
      <Container>
        <Box my={4}>
          <div>hello</div>
        </Box>
      </Container>
    </TopAppBar>
  );
}
