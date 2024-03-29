import { MenuItem, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const countOptions = [
  {
    value: 10,
    label: "10"
  },
  {
    value: 20,
    label: "20"
  },
  {
    value: 30,
    label: "30"
  }
];

export const defaultOption = countOptions[0].value;

export default function SelectCount({}) {
  const { setCount } = useContext(BookContext);

  function handleChange(event) {
    setCount(event.target.value);
  }
  return (
    <Stack my={3} width={150}>
      <TextField
        select
        label="Na stránke"
        defaultValue={defaultOption}
        onChange={handleChange}
      >
        {countOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}