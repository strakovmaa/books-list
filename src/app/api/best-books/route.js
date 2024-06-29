import { goodreads } from "@/data/goodreads";

// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get("count");
  const books = goodreads
    .filter((book) => {
      book.Bookshelves === "please-come-out-soon";
    })
    .slice(0, count)
    .sort();
  console.log("books:", books);
  // await sleep(1000);
  return new Response(JSON.stringify(books));
}
