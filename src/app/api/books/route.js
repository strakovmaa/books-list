import { goodreads } from "@/data/goodreads";

// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const itemsOnPage = parseInt(searchParams.get("itemsOnPage") || 30);
  const page = parseInt(searchParams.get("page") || 1);
  const totalCount = goodreads.length;
  const pageCount = Math.ceil(totalCount / itemsOnPage);

  const startIndex = itemsOnPage * (page - 1);
  const books = (goodreads || []).slice(startIndex, startIndex + itemsOnPage);
  // await sleep(1000);

  const result = {
    books,
    totalCount,
    page,
    pageCount
  };

  return new Response(JSON.stringify(result));
}
