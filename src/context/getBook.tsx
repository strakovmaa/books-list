import { Book } from "@/app/types";
import { BookSource } from "@/data/goodreads";

export const getBook = (book: BookSource): Book => {
  const id = book["Book Id"];
  const title = book.Title.toString();
  const author = book.Author;
  const myRating = book["My Rating"];
  const averageRating = book["Average Rating"];
  const year = book["Original Publication Year"];
  const bookshelves = book.Bookshelves;
  const myReview = book["My Review"];

  const isUnread =
    book["Exclusive Shelf"] !== "read" &&
    book["Exclusive Shelf"] !== "currently-reading";
  return {
    id,
    title,
    author,
    myRating,
    averageRating,
    year,
    bookshelves,
    myReview,
    isUnread
  };
};
