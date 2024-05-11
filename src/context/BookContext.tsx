import { Book, BooksApiResult } from "@/app/types";
import { defaultOption } from "@/components/SelectCount";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";
import { BookContextValue } from "./types";

const bookContextDefaultValue = {
  resultBooks: [],
  isLoading: true,
  setItemsOnPage: () => undefined,
  handleReadBook: () => undefined,
  booksData: undefined,
  paginationProps: {
    count: undefined,
    page: 1,
    onChange: () => undefined
  },
  totalCount: undefined
};

export const BookContext = createContext<BookContextValue>(
  bookContextDefaultValue
);

type Props = {
  children: ReactNode;
};

export const BookProvider = ({ children }: Props) => {
  const [booksData, setBooksData] = useState<Book[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [itemsOnPage, setItemsOnPage] = useState(defaultOption);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>();
  const [totalCount, setTotalCount] = useState<number>();

  const handlePageChange = (_event: never, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get<BooksApiResult>(
        `/api/books?itemsOnPage=${itemsOnPage}&page=${page}`
      );

      const books: Book[] = result.data.books.map((book) => {
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

  const handleReadBook = (id: number, newRating: number, newReview: string) => {
    setBooksData((prev) =>
      (prev || []).map((book) => {
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
