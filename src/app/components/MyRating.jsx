import { Rating, Stack, Typography } from "@mui/material";

export default function MyRating({ rating }) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Typography>Moje hodnotenie: </Typography>{" "}
      {rating === 0 ? (
        <Typography>NEHODNOTENÉ</Typography>
      ) : (
        <>
          <Rating
            name="simple-controlled"
            precision={0.5}
            value={rating}
            readOnly
          />
          <Typography variant="body2" color={"text.secondary"}>
            {rating}
          </Typography>
        </>
      )}
    </Stack>
  );
}
