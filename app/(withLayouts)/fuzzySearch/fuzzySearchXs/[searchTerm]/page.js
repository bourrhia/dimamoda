import React from "react";
import HandlesFuzzySearchXs from "../../../../../components/FuzzySearch/HandlesFuzzySearchXs";

export const fuzzySearchXs = async ({ params }) => {
  const allSearchPrdts = params.searchTerm;
  const allSearchProducts = decodeURIComponent(allSearchPrdts);

  return <HandlesFuzzySearchXs allSearchProducts={allSearchProducts} />;
};

export default fuzzySearchXs;
