import { Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function NewRating({ handleUserRating }) {
  const [value, setValue] = useState();
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Rating
        size="large"
        precision={0.5}
        value={value || 0}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleUserRating(newValue);
        }}
      />
      <Typography variant="body2" color={"text.secondary"}>
        {value}
      </Typography>
    </Stack>
  );
}
