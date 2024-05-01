import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { defaultOption } from "../components/SelectCount";
import { useFilters } from "../hooks/useFilters";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(defaultOption);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get(`/api/books?count=${count}`);
      const books = result.data.map((book) => {
        const isUnread =
          book["Exclusive Shelf"] !== "read" &&
          book["Exclusive Shelf"] !== "currently-reading";
        return { ...book, isUnread };
      });
      setBooksData(books);
      setIsLoading(false);
    };

    loadData();
  }, [count]);

  const handleReadBook = (id, newRating) => {
    setBooksData((prev) =>
      prev.map((book) => {
        if (id === book["Book Id"]) {
          return { ...book, isUnread: false, "My Rating": newRating };
        }
        return book;
      })
    );
  };

  const { resultBooks } = useFilters(booksData);

  return (
    <BookContext.Provider
      value={{
        resultBooks,
        isLoading,
        setCount,
        handleReadBook,
        booksData
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
