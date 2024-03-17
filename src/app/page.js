"use client";

import {
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Switch,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { useState } from "react";
import Book from "./components/Book";
import { goodreads } from "./data/goodreads";

const books = goodreads.slice(0, 50).map((book) => {
  const isUnread =
    book["Exclusive Shelf"] !== "read" &&
    book["Exclusive Shelf"] !== "currently-reading";
  return { ...book, isUnread };
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2"
    },
    background: {
      default: "rgb(242, 200, 206)",
      paper: "rgba(255, 255, 255, 0.5)"
    }
  }
});

export default function Home() {
  // const overFour = books.filter((book) => book["Average Rating"] > 4);
  const [applyRating, setApplyRating] = useState(false);
  const [applyMyRating, setApplyMyRating] = useState(false);
  const [applyUnread, setApplyUnread] = useState(false);

  const handleRatingChange = (event) => {
    setApplyRating(event.target.checked);
  };

  const handleMyRatingChange = (event) => {
    setApplyMyRating(event.target.checked);
  };

  const handleUnreadChange = (event) => {
    setApplyUnread(event.target.checked);
  };

  const filterRating = (book) => {
    if (applyRating === true) {
      return book["Average Rating"] > 4.5;
    }
    return true;
  };

  const filterMyRating = (book) => {
    if (applyMyRating === true) {
      return book["My Rating"] > 0;
    }
    return true;
  };

  const filterUnread = (book) => {
    if (applyUnread === true) {
      return book.isUnread;
    }
    return true;
  };

  const getResultBooks = () => {
    return books
      .filter(filterRating)
      .filter(filterMyRating)
      .filter(filterUnread);
  };

  const resultBooks = getResultBooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <FormControlLabel
          control={
            <Switch checked={applyRating} onChange={handleRatingChange} />
          }
          label="Najlepšie hodnotené"
        />
        <FormControlLabel
          control={
            <Switch checked={applyMyRating} onChange={handleMyRatingChange} />
          }
          label="Moje hodnotené"
        />
        <FormControlLabel
          control={
            <Switch checked={applyUnread} onChange={handleUnreadChange} />
          }
          label="Neprečítané"
        />

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {resultBooks.map((book) => (
            <Grid key={book.Title} item xs={6}>
              <Book book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
