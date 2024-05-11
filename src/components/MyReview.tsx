import { Book } from "@/app/types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import MyRating from "./MyRating";

type Props = {
  review: Book["My Review"];
  userRating: Book["My Rating"];
};

export default function MyReview({ review, userRating }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <Box>
      <Typography variant="h6">Moja recenzia</Typography>
      <MyRating rating={userRating} />
      {review === "" ? (
        <Typography>Bez recenzie</Typography>
      ) : (
        <>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: !isVisible ? 3 : undefined,
              textOverflow: !isVisible ? "ellipsis" : undefined
            }}
            dangerouslySetInnerHTML={{ __html: review }}
          />
          <Button
            variant="text"
            size="small"
            onClick={handleClick}
            startIcon={!isVisible ? <ExpandMore /> : <ExpandLess />}
          >
            Zobraziť {isVisible ? "menej" : "viac"}
          </Button>
        </>
      )}
    </Box>
  );
}
