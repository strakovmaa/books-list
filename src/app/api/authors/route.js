// const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

import { goodreads } from "@/data/goodreads";

export async function GET(request) {
  const allAuthors = (goodreads || []).map((book) => book.Author);

  const uniqueAuthors = [...new Set(allAuthors)];

  return new Response(JSON.stringify(uniqueAuthors));
}
