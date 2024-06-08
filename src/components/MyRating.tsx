import { Book } from "@/app/types";
import { Rating, Stack, Typography } from "@mui/material";

type Props = {
  rating: Book["averageRating"];
};

export default function MyRating({ rating }: Props) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1} mb={1}>
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
