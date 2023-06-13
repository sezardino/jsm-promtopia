import { useState } from "react";

export const usePromptList = () => {
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  return {
    searchString,
    setSearchString,
    page,
    setPage,
    limit,
    setLimit,
  };
};
