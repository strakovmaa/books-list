"use client";

import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme
} from "@mui/material";
import Book from "./components/Book";
import Filters from "./components/Filters";
import { goodreads } from "./data/goodreads";
import { useFilters } from "./hooks/useFilters";

const books = goodreads.slice(0, 50).map((book) => {
  const isUnread =
    book["Exclusive Shelf"] !== "read" &&
    book["Exclusive Shelf"] !== "currently-reading";
  return { ...book, isUnread };
});

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
  const {
    resultBooks,
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange
  } = useFilters(books);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Filters
          applyRating={applyRating}
          handleRatingChange={handleRatingChange}
          applyMyRating={applyMyRating}
          handleMyRatingChange={handleMyRatingChange}
          applyUnread={applyUnread}
          handleUnreadChange={handleUnreadChange}
        />

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {resultBooks.map((book) => (
            <Grid key={book.Title} item xs={4}>
              <Book book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
