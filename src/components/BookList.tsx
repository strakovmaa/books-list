import {
  Alert,
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  Typography
} from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./BookCard";

export default function BookList() {
  const { resultBooks, isLoading, paginationProps, totalCount } =
    useContext(BookContext);

  if (isLoading) {
    return (
      <Stack my={20} alignItems={"center"}>
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <>
      {resultBooks.length === 0 ? (
        <Alert variant="filled" severity="info">
          Nenašli sa žiadne knihy
        </Alert>
      ) : (
        <>
          <Typography my={1}>Nájdených {totalCount} kníh</Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {resultBooks.map((book) => (
              <Grid key={book.title} item xs={12} md={4}>
                <Book book={book} />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} mt={4} alignItems="center">
            <Pagination {...paginationProps} />
          </Stack>
        </>
      )}
    </>
  );
}
