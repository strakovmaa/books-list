import { defaultOption } from "@/components/SelectCount";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [itemsOnPage, setItemsOnPage] = useState(defaultOption);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [totalCount, setTotalCount] = useState();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get(
        `/api/books?itemsOnPage=${itemsOnPage}&page=${page}`
      );

      const books = result.data.books.map((book) => {
        const isUnread =
          book["Exclusive Shelf"] !== "read" &&
          book["Exclusive Shelf"] !== "currently-reading";
        return { ...book, isUnread };
      });
      setTotalCount(result.data.totalCount);
      setPageCount(result.data.pageCount);
      setBooksData(books);
      setIsLoading(false);
    };
    setIsLoading(true);
    loadData();
  }, [itemsOnPage, page]);

  const handleReadBook = (id, newRating, newReview) => {
    setBooksData((prev) =>
      prev.map((book) => {
        if (id === book["Book Id"]) {
          return {
            ...book,
            isUnread: false,
            "My Rating": newRating,
            "My Review": newReview
          };
        }
        return book;
      })
    );
  };

  const { resultBooks } = useFilters(booksData);
  const paginationProps = {
    count: pageCount,
    page,
    onChange: handlePageChange
  };

  return (
    <BookContext.Provider
      value={{
        resultBooks,
        isLoading,
        setItemsOnPage,
        handleReadBook,
        booksData,
        paginationProps,
        totalCount
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
