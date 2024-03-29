import { goodreads } from "@/app/data/goodreads";

// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  const books = goodreads.slice(0, 10);
  // await sleep(1000);
  return new Response(JSON.stringify(books));
}
