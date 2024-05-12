import { BookSource } from "@/data/goodreads";

export type Book = BookSource & {
  isUnread: boolean;
};

export type BooksApiResult = {
  books: BookSource[];
  totalCount: number;
  page: number;
  pageCount: number;
};

export type FormValue = {
  search: string;
  haventRead: boolean;
  rated: boolean;
  applyRating: "allRating" | "bestRating" | "worstRating";
  authors: string[];
};
