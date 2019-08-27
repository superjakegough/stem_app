import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TopAppBar from "./Navigation/TopAppBar";
import MainLayout from "./Layout/MainLayout";
import "./App.scss";

export default function App() {
  return (
    <TopAppBar>
      <Container>
        <Box my={4}>
          <MainLayout />
        </Box>
      </Container>
    </TopAppBar>
  );
}
