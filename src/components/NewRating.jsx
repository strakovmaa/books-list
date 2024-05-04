import { Rating, Stack, Typography } from "@mui/material";

export default function NewRating({ newRatingValue, setNewRatingValue }) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Rating
        size="large"
        precision={0.5}
        value={newRatingValue || 0}
        onChange={(event, newValue) => {
          setNewRatingValue(newValue);
        }}
      />
      <Typography variant="body2" color={"text.secondary"}>
        {newRatingValue}
      </Typography>
    </Stack>
  );
}
