"use client";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";
import BookList from "./components/BookList";
import Filters from "./components/Filters";
import { BookProvider } from "./context/BookContext";

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <BookProvider>
        <CssBaseline />
        <Container maxWidth="lg">
          <Filters />

          <BookList />
        </Container>
      </BookProvider>
    </ThemeProvider>
  );
}
