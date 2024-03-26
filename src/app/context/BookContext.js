import { createContext } from "react";
import { goodreads } from "../data/goodreads";
import { useFilters } from "../hooks/useFilters";

export const BookContext = createContext();

const books = goodreads.slice(0, 100).map((book) => {
  const isUnread =
    book["Exclusive Shelf"] !== "read" &&
    book["Exclusive Shelf"] !== "currently-reading";
  return { ...book, isUnread };
});

export const BookProvider = ({ children }) => {
  const {
    resultBooks,
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange
  } = useFilters(books);

  return (
    <BookContext.Provider
      value={{
        resultBooks,
        applyRating,
        handleRatingChange,
        applyMyRating,
        handleMyRatingChange,
        applyUnread,
        handleUnreadChange
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
