import { KeyboardArrowRight } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function Shelves({ shelves }) {
  const shelvesArray = shelves.split(", ");
  return (
    <Stack gap={1}>
      {shelvesArray.map((shelf) => (
        <Stack key={shelf} direction={"row"} alignItems={"center"} gap={1}>
          <KeyboardArrowRight color="primary" />
          <Typography>{shelf}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
