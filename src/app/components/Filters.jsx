import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField
} from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import SelectAuthors from "./SelectAuthors";

export default function Filters() {
  const {
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange,
    search,
    handleSearchChange
  } = useContext(BookContext);

  return (
    <Box my={3}>
      <TextField
        id="outlined-controlled"
        label="Vyhľadávať"
        value={search}
        onChange={handleSearchChange}
      />
      <FormControl>
        <RadioGroup value={applyRating} onChange={handleRatingChange}>
          <FormControlLabel
            value="rating"
            control={<Radio />}
            label="Všetky hodnotené"
          />
          <FormControlLabel
            value="bestRating"
            control={<Radio />}
            label="Najlepšie hodnotené"
          />
          <FormControlLabel
            value="worstRating"
            control={<Radio />}
            label="Najhoršie hodnotené"
          />
        </RadioGroup>
      </FormControl>

      <FormControlLabel
        control={
          <Switch checked={applyMyRating} onChange={handleMyRatingChange} />
        }
        label="Moje hodnotené"
      />
      <FormControlLabel
        control={
          <Checkbox checked={applyUnread} onChange={handleUnreadChange} />
        }
        label="Neprečítané"
      />
      <SelectAuthors />
    </Box>
  );
}
