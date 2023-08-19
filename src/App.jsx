import React from "react";
import { ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";

import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stories from "./components/Stories";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#36454F",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Toolbar sx={{ padding: 7 }} />
        <Hero />
        <About />
        <Stories />
      </ThemeProvider>
    </>
  );
}

export default App;
