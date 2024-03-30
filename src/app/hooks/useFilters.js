import { useState } from "react";

export const useFilters = (books) => {
  const [applyRating, setApplyRating] = useState(false);
  const [applyMyRating, setApplyMyRating] = useState(false);
  const [applyUnread, setApplyUnread] = useState(false);
  const [search, setSearch] = useState("");

  const handleRatingChange = (event) => {
    setApplyRating(event.target.checked);
  };

  const handleMyRatingChange = (event) => {
    setApplyMyRating(event.target.checked);
  };

  const handleUnreadChange = (event) => {
    setApplyUnread(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (book) => {
    const title = book.Title.toLowerCase();
    const result = title.indexOf(search.trim().toLowerCase());
    return result !== -1;
  };

  const filterBook = (book) => {
    const rating = applyRating ? book["Average Rating"] > 4.5 : true;
    const myRating = applyMyRating ? book["My Rating"] > 0 : true;
    const unread = applyUnread ? book.isUnread : true;
    const searched = search.length > 0 ? getSearch(book) : true;
    return rating && myRating && unread && searched;
  };

  const resultBooks = (books || []).filter(filterBook);
  return {
    resultBooks,
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange,
    search,
    handleSearchChange
  };
};
