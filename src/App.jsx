import React from "react";
import { ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";

import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stories from "./components/Stories";
import Footer from "./components/Footer";

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
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
