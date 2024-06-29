import { FormValue } from "@/app/types";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import AutocompleteAuthors from "./AutocompleteAuthors";
import SelectCount from "./SelectCount";

export default function Filters() {
  const { control } = useFormContext<FormValue>();
  return (
    <Box my={3}>
      <form>
        <Grid container columnSpacing={{ xs: 1, md: 6 }}>
          <Grid item xs={12} md={7}>
            <Stack rowGap={2}>
              <AutocompleteAuthors />

              <Controller
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Vyhľadávať podľa názvu"
                  />
                )}
                name="search"
                control={control}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Controller
              defaultValue="allRating"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="allRating"
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
              )}
              name="applyRating"
              control={control}
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack rowGap={1}>
              <SelectCount />

              <Controller
                name="rated"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e) => field.onChange(e.target.checked)}
                        checked={field.value}
                      />
                    }
                    label="Moje hodnotené"
                  />
                )}
              />

              <Controller
                name="haventRead"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => field.onChange(e.target.checked)}
                        checked={field.value}
                      />
                    }
                    label="Neprečítané"
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
