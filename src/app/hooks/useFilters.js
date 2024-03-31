import { useState } from "react";

export const useFilters = (books) => {
  const [applyRating, setApplyRating] = useState("rating");
  const [applyMyRating, setApplyMyRating] = useState(false);
  const [applyUnread, setApplyUnread] = useState(false);
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");

  const handleRatingChange = (event) => {
    setApplyRating(event.target.value);
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

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const getSearch = (book) => {
    const title = book.Title.toLowerCase();
    const result = title.indexOf(search.trim().toLowerCase());
    return result !== -1;
  };

  const getRating = (book) => {
    if (applyRating === "bestRating") {
      return book["Average Rating"] > 4.5;
    }
    if (applyRating === "worstRating") {
      return book["Average Rating"] < 4;
    }

    return true;
  };

  const filterBook = (book) => {
    const rating = getRating(book);
    const myRating = applyMyRating ? book["My Rating"] > 0 : true;
    const unread = applyUnread ? book.isUnread : true;
    const searched = search.length > 0 ? getSearch(book) : true;
    const selectAuthor = author.length > 0 ? author === book.Author : true;
    // ak sú všetky 4 true, knižka sa zobrazí
    return selectAuthor && rating && myRating && unread && searched;
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
    handleSearchChange,
    author,
    handleAuthorChange
  };
};
