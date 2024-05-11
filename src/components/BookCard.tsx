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
import ReviewDialog from "./ReviewDialog";
import Shelves from "./Shelves";
import { Book } from "@/app/types";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  const [showNewRating, setShowNewRating] = useState(false);

  const handleOpen = () => {
    setShowNewRating(true);
  };
  const handleClose = () => {
    setShowNewRating(false);
  };

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderColor: book.isUnread ? theme.palette.primary.main : undefined
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
          <MyReview review={book["My Review"]} userRating={book["My Rating"]} />
        </Stack>
      </CardContent>

      {book.isUnread && (
        <>
          <CardActions>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleOpen}
              startIcon={book["Average Rating"] > 4 ? <Warning /> : undefined}
            >
              Prečítať
            </Button>
          </CardActions>
          <ReviewDialog
            open={showNewRating}
            onClose={handleClose}
            book={book}
          />
        </>
      )}
    </Card>
  );
}
