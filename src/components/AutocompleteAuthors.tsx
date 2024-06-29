import { FormValue } from "@/app/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BookContext } from "../context/BookContext";

export default function AutocompleteAuthors() {
  const { control } = useFormContext<FormValue>();
  const { authorsList } = useContext(BookContext);

  if (authorsList === undefined) {
    return;
  }

  const sortedList = authorsList.sort();

  return (
    <Controller
      name="authors"
      control={control}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          multiple
          options={sortedList}
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
              {option}
            </Box>
          )}
        />
      )}
    />
  );
}
