"use client";

import {
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme
} from "@mui/material";
import BookList from "./components/BookList";
import Filters from "./components/Filters";
import SelectAmount from "./components/SelectCount";
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
          <Stack flexDirection="row" justifyContent="space-between">
            <Filters />
            <SelectAmount />
          </Stack>

          <BookList />
        </Container>
      </BookProvider>
    </ThemeProvider>
  );
}
