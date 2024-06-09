import { Book, BooksApiResult, FormValue } from "@/app/types";
import { defaultOption } from "@/components/SelectCount";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getBook } from "./getBook";
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
    onChange: () => undefined,
  },
  totalCount: undefined,
};

export const BookContext = createContext<BookContextValue>(
  bookContextDefaultValue
);

type Props = {
  children: ReactNode;
};

export const BookProvider = ({ children }: Props) => {
  const { watch } = useFormContext<FormValue>();
  const haventRead = watch("haventRead");
  const applyRating = watch("applyRating");
  const rated = watch("rated");
  const search = watch("search");
  const authors = watch("authors");

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
      const result = await axios.get<BooksApiResult>(`/api/books`, {
        params: {
          itemsOnPage,
          page,
          haventRead,
          applyRating,
          search,
          rated,
          authors,
        },
      });

      const books: Book[] = result.data.books.map(getBook);
      setTotalCount(result.data.totalCount);
      setPageCount(result.data.pageCount);
      setBooksData(books);
      setIsLoading(false);
    };
    setIsLoading(true);
    loadData();
  }, [applyRating, haventRead, itemsOnPage, page, rated, search, authors]);

  const handleReadBook = (id: number, newRating: number, newReview: string) => {
    setBooksData((prev) =>
      (prev || []).map((book) => {
        if (id === book.id) {
          return {
            ...book,
            isUnread: false,
            myRating: newRating,
            myReview: newReview,
          };
        }
        return book;
      })
    );
  };

  const resultBooks = booksData || [];
  const paginationProps = {
    count: pageCount,
    page,
    onChange: handlePageChange,
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
        totalCount,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
