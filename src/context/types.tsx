import { Book } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export type BookContextValue = {
  resultBooks: Book[];
  isLoading: boolean;
  setItemsOnPage: Dispatch<SetStateAction<number>>;
  handleReadBook: (id: number, newRating: number, newReview: string) => void;
  booksData: Book[] | undefined;
  paginationProps: PaginationProps;
  totalCount: number | undefined;
};

export type PaginationProps = {
  count: number | undefined;
  page: number;
  onChange: any;
};
