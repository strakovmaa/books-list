import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField
} from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import AutocompleteAuthors from "./AutocompleteAuthors";

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
      <Grid container columnSpacing={{ xs: 1, md: 6 }}>
        <Grid item xs={12} md={7}>
          <Stack rowGap={2}>
            <AutocompleteAuthors />
            <TextField
              fullWidth
              id="outlined-controlled"
              label="Vyhľadávať"
              value={search}
              onChange={handleSearchChange}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={2.5}>
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
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Stack rowGap={1}>
            {/* <SelectCount /> */}
            <FormControlLabel
              control={
                <Switch
                  checked={applyMyRating}
                  onChange={handleMyRatingChange}
                />
              }
              label="Moje hodnotené"
            />
            <FormControlLabel
              control={
                <Checkbox checked={applyUnread} onChange={handleUnreadChange} />
              }
              label="Neprečítané"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
