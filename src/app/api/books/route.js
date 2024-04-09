import { goodreads } from "@/data/goodreads";

// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get("count");
  const books = goodreads.slice(0, count);
  // await sleep(1000);
  return new Response(JSON.stringify(books));
}
