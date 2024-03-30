import { Box, FormControlLabel, Switch, TextField } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

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
      <FormControlLabel
        control={<Switch checked={applyRating} onChange={handleRatingChange} />}
        label="Najlepšie hodnotené"
      />
      <FormControlLabel
        control={
          <Switch checked={applyMyRating} onChange={handleMyRatingChange} />
        }
        label="Moje hodnotené"
      />
      <FormControlLabel
        control={<Switch checked={applyUnread} onChange={handleUnreadChange} />}
        label="Neprečítané"
      />
    </Box>
  );
}
