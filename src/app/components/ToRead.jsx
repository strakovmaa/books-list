import { Alert, Typography } from "@mui/material";

export default function ToRead({ book, isUnread }) {
  const average = book["Average Rating"];

  return average > 4 && isUnread ? (
    <Alert severity="warning" sx={{ my: 1 }}>
      <Typography fontWeight={"bold"} sx={{ fontWeight: "bold" }}>
        PREČÍTAŤ!
      </Typography>
    </Alert>
  ) : null;
}
