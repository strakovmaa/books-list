"use client";

import {
  Box,
  Container,
  CssBaseline,
  Stack,
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
      <Stack sx={{ minHeight: "100vh" }}>
        <Header />
        <Box flexGrow={1}>
          <Container maxWidth="lg">{children}</Container>
        </Box>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
