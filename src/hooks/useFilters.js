import { useFormContext } from "react-hook-form";

export const useFilters = (books) => {
  const { watch } = useFormContext();

  const search = watch("search");
  const haventRead = watch("unread");
  const rated = watch("rated");
  const applyRating = watch("applyRating");
  const authors = watch("authors");

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
    const myRating = rated ? book["My Rating"] > 0 : true;
    const unread = haventRead ? book.isUnread : true;
    const searched = search.length > 0 ? getSearch(book) : true;
    const selectAuthor = authors ? authors.includes(book.Author) : true;
    // ak sú všetky 4 true, knižka sa zobrazí
    return selectAuthor && rating && myRating && unread && searched;
  };

  const filteredBooks = (books || []).filter(filterBook);
  return {
    filteredBooks
  };
};
