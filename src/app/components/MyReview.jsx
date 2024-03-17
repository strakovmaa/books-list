import { Button, Typography } from "@mui/material";
import { useState } from "react";

export default function MyReview({ review }) {
  const content = review === "" ? "BEZ RECENZIE" : review;
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <>
      {isVisible && <Typography>{content}</Typography>}
      <Button variant="outlined" size="small" onClick={handleClick}>
        Zobraziť recenziu
      </Button>
    </>
  );
}
