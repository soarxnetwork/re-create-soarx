"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

    console.log("IN page search job", searchQuery)
  return <div>Your search</div>;
};

export default Search;
