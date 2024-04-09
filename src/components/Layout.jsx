"use client";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b"
    },
    background: {
      default: "#e0f2f1"
    }
  }
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}
