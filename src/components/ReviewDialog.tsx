import { Book } from "@/app/types";
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
import { ChangeEventHandler, useContext, useState } from "react";
import NewRating from "./NewRating";

type Props = {
  open: boolean;
  book: Book;
  onClose: () => void;
};

export default function ReviewDialog({ open, book, onClose }: Props) {
  const { handleReadBook } = useContext(BookContext);

  const [newReviewValue, setNewReviewValue] = useState("");
  const [newRatingValue, setNewRatingValue] = useState<number>();

  const handleNewReview: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setNewReviewValue(event.target.value);
  };

  const handleUserRating = () => {
    if (newRatingValue === undefined) {
      return;
    }

    handleReadBook(book.id, newRatingValue, newReviewValue);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{book.title}</DialogTitle>

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
