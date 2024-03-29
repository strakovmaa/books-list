import { createContext, useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    const result = await fetch("/api/books");
    const data = await result.json();
    const books=data.map((book) => {
      const isUnread =
        book["Exclusive Shelf"] !== "read" &&
        book["Exclusive Shelf"] !== "currently-reading";
      return { ...book, isUnread };
    });


    setBooksData(books);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const {
    resultBooks,
    applyRating,
    handleRatingChange,
    applyMyRating,
    handleMyRatingChange,
    applyUnread,
    handleUnreadChange
  } = useFilters(booksData);

  return (
    <BookContext.Provider
      value={{
        resultBooks,
        applyRating,
        handleRatingChange,
        applyMyRating,
        handleMyRatingChange,
        applyUnread,
        handleUnreadChange,
        isLoading
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
