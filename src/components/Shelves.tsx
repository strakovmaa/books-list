import { Book } from "@/app/types";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

type Props = {
  shelves: Book["Bookshelves"];
};

export default function Shelves({ shelves }: Props) {
  const shelvesArray = shelves.split(", ");
  return (
    <Stack>
      {shelvesArray.map((shelf: string) => (
        <Stack key={shelf} direction={"row"} alignItems={"center"} gap={1}>
          <KeyboardArrowRight color="primary" />
          <Typography>{shelf}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
