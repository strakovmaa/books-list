import Book from "@/components/Book";
import { BestBookContext } from "@/context/BestBookContext";
import {
  Alert,
  CircularProgress,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useContext } from "react";

export default function BookList() {
  const { resultBooks, isLoading } = useContext(BestBookContext);

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
          <Typography my={1}>Nájdených {resultBooks.length} kníh</Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {resultBooks.map((book) => (
              <Grid key={book.Title} item xs={12} md={4}>
                <Book book={book} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
