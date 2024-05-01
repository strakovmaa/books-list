import { BookContext } from "@/context/BookContext";
import { Warning } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import MyRating from "./MyRating";
import MyReview from "./MyReview";
import NewRating from "./NewRating";
import Shelves from "./Shelves";

export default function Book({ book }) {
  const { handleReadBook } = useContext(BookContext);
  const [showNewRating, setShowNewRating] = useState(false);

  const handleOpen = () => {
    setShowNewRating(true);
  };
  const handleClose = () => {
    setShowNewRating(false);
  };

  const handleUserRating = (newRating) => {
    handleReadBook(book["Book Id"], newRating);
    handleClose();
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
      )}

      <Dialog
        open={showNewRating}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{book.Title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Ohodnoť ma
          </Typography>
          <NewRating handleUserRating={handleUserRating} />
        </DialogContent>
      </Dialog>
    </Card>
  );
}
