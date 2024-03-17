import { FormControlLabel, Switch } from "@mui/material";

export default function Filters({
  applyRating,
  handleRatingChange,
  applyMyRating,
  handleMyRatingChange,
  applyUnread,
  handleUnreadChange
}) {
  return (
    <>
      <FormControlLabel
        control={<Switch checked={applyRating} onChange={handleRatingChange} />}
        label="Najlepšie hodnotené"
      />
      <FormControlLabel
        control={
          <Switch checked={applyMyRating} onChange={handleMyRatingChange} />
        }
        label="Moje hodnotené"
      />
      <FormControlLabel
        control={<Switch checked={applyUnread} onChange={handleUnreadChange} />}
        label="Neprečítané"
      />
    </>
  );
}
