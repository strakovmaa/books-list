import { Grid } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

export default function BookList() {
  const { resultBooks } = useContext(BookContext);
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {resultBooks.map((book) => (
        <Grid key={book.Title} item xs={4}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
