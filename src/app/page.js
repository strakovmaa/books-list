"use client";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
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
  const methods = useForm();

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <BookProvider>
          <CssBaseline />
          <Container maxWidth="lg">
            <Filters />

            <BookList />
          </Container>
        </BookProvider>
      </FormProvider>
    </ThemeProvider>
  );
}
