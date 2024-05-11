import { MenuItem, TextField } from "@mui/material";
import { ChangeEventHandler, useContext } from "react";
import { BookContext } from "../context/BookContext";

const countOptions = [
  {
    value: 15,
    label: "15"
  },
  {
    value: 60,
    label: "60"
  },
  {
    value: 90,
    label: "90"
  }
];

export const defaultOption = countOptions[0].value;

export default function SelectCount({}) {
  const { setItemsOnPage } = useContext(BookContext);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setItemsOnPage(parseInt(event.target.value));
  };
  return (
    <TextField
      size="small"
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
  );
}
