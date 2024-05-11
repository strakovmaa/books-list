import { Rating, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  newRatingValue: number | undefined;
  setNewRatingValue: Dispatch<SetStateAction<number | undefined>>;
};

export default function NewRating({
  newRatingValue,
  setNewRatingValue
}: Props) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Rating
        size="large"
        precision={0.5}
        value={newRatingValue || 0}
        onChange={(_event, newValue) => {
          if (newValue === null) {
            return;
          }
          setNewRatingValue(newValue);
        }}
      />
      <Typography variant="body2" color={"text.secondary"}>
        {newRatingValue}
      </Typography>
    </Stack>
  );
}
