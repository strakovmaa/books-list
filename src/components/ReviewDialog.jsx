import { BookContext } from "@/context/BookContext";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import NewRating from "./NewRating";

export default function ReviewDialog({ open, book, onClose }) {
  const { handleReadBook } = useContext(BookContext);

  const [newReviewValue, setNewReviewValue] = useState("");
  const [newRatingValue, setNewRatingValue] = useState();

  const handleNewReview = (event) => {
    setNewReviewValue(event.target.value);
  };

  const handleUserRating = () => {
    handleReadBook(book["Book Id"], newRatingValue, newReviewValue);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{book.Title}</DialogTitle>

      <DialogContent>
        <Stack rowGap={2}>
          <Typography variant="body1">Ohodnoť ma</Typography>
          <NewRating
            newRatingValue={newRatingValue}
            setNewRatingValue={setNewRatingValue}
          />

          <TextField
            label="Priestor na recenziu"
            multiline
            rows={4}
            value={newReviewValue}
            onChange={handleNewReview}
          />
          <Button onClick={handleUserRating}>Uložiť</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
