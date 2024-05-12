import { Book, FormValue } from "@/app/types";
import { useFormContext } from "react-hook-form";

export const useFilters = (books: Book[] | undefined) => {
  const { watch } = useFormContext<FormValue>();

  const search = watch("search");
  const haventRead = watch("haventRead");
  const rated = watch("rated");
  const applyRating = watch("applyRating");
  const authors = watch("authors");

  const getSearch = (book: Book) => {
    const stringTitle =
      typeof book.Title === "string" ? book.Title : book.Title.toString();
    const title = stringTitle.toLowerCase();
    const result = title.indexOf(search.trim().toLowerCase());
    return result !== -1;
  };

  const getRating = (book: Book) => {
    if (applyRating === "bestRating") {
      return book["Average Rating"] > 4.5;
    }
    if (applyRating === "worstRating") {
      return book["Average Rating"] < 4;
    }

    return true;
  };

  const filterBook = (book: Book) => {
    const rating = getRating(book);
    const myRating = rated ? book["My Rating"] > 0 : true;
    const unread = haventRead ? book.isUnread : true;
    const searched = search.length > 0 ? getSearch(book) : true;
    const selectAuthor = authors ? authors.includes(book.Author) : true;
    // ak sú všetky 4 true, knižka sa zobrazí
    return selectAuthor && rating && myRating && unread && searched;
  };

  const resultBooks = (books || []).filter(filterBook);
  return {
    resultBooks
  };
};
