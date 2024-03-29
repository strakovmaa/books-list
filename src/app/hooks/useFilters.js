import { useState } from "react";

export const useFilters = (books) => {
  const [applyRating, setApplyRating] = useState(false);
  const [applyMyRating, setApplyMyRating] = useState(false);
  const [applyUnread, setApplyUnread] = useState(false);

  const handleRatingChange = (event) => {
    setApplyRating(event.target.checked);
  };

  const handleMyRatingChange = (event) => {
    setApplyMyRating(event.target.checked);
  };

  const handleUnreadChange = (event) => {
    setApplyUnread(event.target.checked);
  };

  const filterBook = (book) => {
    const rating = applyRating ? book["Average Rating"] > 4.5 : true;
    const myRating = applyMyRating ? book["My Rating"] > 0 : true;
    const unread = applyUnread ? book.isUnread : true;
    return rating && myRating && unread;
  };

  const resultBooks = (books || []).filter(filterBook);
  return {
    resultBooks,
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange
  };
};
