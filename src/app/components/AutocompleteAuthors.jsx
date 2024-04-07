import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function AutocompleteAuthors() {
  const { booksData, handleAuthorChange, authors } = useContext(BookContext);

  const allAuthors = (booksData || []).map((book) => book.Author);
  const uniqueAuthors = [...new Set(allAuthors)];

  return (
    <Stack spacing={3}>
      <Autocomplete
        multiple
        options={uniqueAuthors}
        defaultValue={[]}
        value={authors}
        onChange={handleAuthorChange}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            label="Vyhľadávanie podľa autorov"
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option} ({allAuthors.filter((x) => x == option).length})
          </Box>
        )}
      />
    </Stack>
  );
}
