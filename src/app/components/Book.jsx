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
import ToRead from "./ToRead";

export default function Book({ book }) {
  console.log("book:", book);
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
        borderColor: isUnread ? theme.palette.primary.main : undefined
      })}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {book.Title} <i>({book.Author})</i>
        </Typography>
        <Stack gap={2}>
          <MyRating rating={userRating} />
          <Shelves shelves={book.Bookshelves} />
          <MyReview review={book["My Review"]} />
          <ToRead book={book} isUnread={isUnread} />
        </Stack>
      </CardContent>

      {isUnread && (
        <CardActions>
          <Button variant="contained" onClick={handleClick}>
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
