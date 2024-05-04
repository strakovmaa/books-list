import { useState } from "react";

export const usePagination = (filteredBooks) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const itemsOnPage = 9;
  const pageCount = Math.ceil(filteredBooks.length / itemsOnPage);

  const startIndex = itemsOnPage * (page - 1);
  const resultBooks = (filteredBooks || []).slice(
    startIndex,
    startIndex + itemsOnPage
  );

  const paginationProps = {
    count: pageCount,
    page,
    onChange: handlePageChange
  };

  return {
    resultBooks,
    paginationProps
  };
};
