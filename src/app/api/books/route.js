import { goodreads } from "@/data/goodreads";

// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const itemsOnPage = parseInt(searchParams.get("itemsOnPage") || 30);
  const page = parseInt(searchParams.get("page") || 1);
  const haventRead = searchParams.get("haventRead") === "true";
  const applyRating = searchParams.get("applyRating");
  const rated = searchParams.get("rated") === "true";
  const search = searchParams.get("search") || "";
  const authors = searchParams.getAll("authors[]");

  const isUnread = (book) => {
    return (
      book["Exclusive Shelf"] !== "read" &&
      book["Exclusive Shelf"] !== "currently-reading"
    );
  };

  const getRating = (book) => {
    if (applyRating === "bestRating") {
      return book["Average Rating"] > 4.5;
    }
    if (applyRating === "worstRating") {
      return book["Average Rating"] < 3.5;
    }

    return true;
  };

  const getSearch = (book) => {
    const title = book?.["Title"]?.toString().toLowerCase();

    const result = title.indexOf(search.trim().toLowerCase());
    return result !== -1;
  };

  const filterBook = (book) => {
    const unread = haventRead ? isUnread(book) : true;
    const rating = getRating(book);
    const myGrRating = rated ? book["My Rating"] > 0 : true;
    const searched = search.length > 0 ? getSearch(book) : true;
    const selectAuthor = !!authors.length
      ? authors.includes(book["Author"])
      : true;

    return unread && rating && myGrRating && searched && selectAuthor;
  };

  const resultBooks = (goodreads || []).filter(filterBook);

  const totalCount = resultBooks.length;
  const pageCount = Math.ceil(totalCount / itemsOnPage);

  const startIndex = itemsOnPage * (page - 1);
  const books = (resultBooks || []).slice(startIndex, startIndex + itemsOnPage);
  // await sleep(1000);

  const result = {
    books,
    totalCount,
    page,
    pageCount,
  };

  return new Response(JSON.stringify(result));
}
