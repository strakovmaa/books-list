import { Autocomplete, Box, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BookContext } from "../context/BookContext";
import { FormValue } from "@/app/types";

export default function AutocompleteAuthors() {
  const { control } = useFormContext<FormValue>();
  const { booksData } = useContext(BookContext);

  const allAuthors = (booksData || []).map((book) => book.Author);
  const uniqueAuthors = [...new Set(allAuthors)];

  return (
    <Controller
      name="authors"
      control={control}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          multiple
          options={uniqueAuthors}
          defaultValue={[]}
          onChange={(_, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...field}
              {...params}
              fullWidth
              inputRef={ref}
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
      )}
    />
  );
}
