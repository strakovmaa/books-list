import { MenuItem, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function SelectAuthors() {
  const { booksData, handleAuthorChange, author } = useContext(BookContext);

  const authors = (booksData || []).map((book) => book.Author);
  const uniqueAuthors = [...new Set(authors)];

  return (
    <Stack my={3} width={300}>
      <TextField
        select
        label="Vyhľadávanie podľa autorov"
        defaultValue=""
        onChange={handleAuthorChange}
      >
        {uniqueAuthors.map((currentAuthor) => (
          <MenuItem checked={author} key={currentAuthor} value={currentAuthor}>
            {currentAuthor} ({authors.filter((x) => x == currentAuthor).length})
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
