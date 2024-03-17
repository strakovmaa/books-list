import { Rating, Stack, Typography } from "@mui/material";
import React from "react";

export default function NewRating({ setUserRating }) {
  const [value, setValue] = React.useState();
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Rating
        name="simple-controlled"
        precision={0.5}
        value={value || 0}
        onChange={(event, newValue) => {
          setValue(newValue);
          setUserRating(newValue);
        }}
      />
      <Typography variant="body2" color={"text.secondary"}>
        {value}
      </Typography>
    </Stack>
  );
}
