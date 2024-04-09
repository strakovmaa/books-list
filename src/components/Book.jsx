import { Warning } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";
import MyRating from "./MyRating";
import MyReview from "./MyReview";
import NewRating from "./NewRating";
import Shelves from "./Shelves";

export default function Book({ book }) {
  const [isUnread, setIsUnread] = useState(book.isUnread);
  const [showNewRating, setShowNewRating] = useState(false);
  const [userRating, setUserRating] = useState(book["My Rating"]);

  function handleClick() {
    setIsUnread(false);
    setShowNewRating(true);
  }
  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderColor: isUnread ? theme.palette.primary.main : undefined
      })}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {book.Title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {book.Author}, {book["Original Publication Year"]}
        </Typography>

        <Stack gap={2}>
          <MyRating rating={book["Average Rating"]} />

          <Shelves shelves={book.Bookshelves} />
          <MyReview review={book["My Review"]} userRating={userRating} />
        </Stack>
      </CardContent>

      {isUnread && (
        <CardActions>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleClick}
            startIcon={book["Average Rating"] > 4 ? <Warning /> : undefined}
          >
            Prečítať
          </Button>
        </CardActions>
      )}
      {showNewRating && userRating === 0 && (
        <NewRating setUserRating={setUserRating} />
      )}
    </Card>
  );
}
