import React from "react";
import HandlesFuzzySearchUpSm from "../../../../../components/FuzzySearch/HandlesFuzzySearchUpSm";

export const fuzzySearchUpSm = async ({ params }) => {
  const allSearchPrdts = params.searchTerm;
  const allSearchProducts = decodeURIComponent(allSearchPrdts);

  return <HandlesFuzzySearchUpSm allSearchProducts={allSearchProducts} />;
};

export default fuzzySearchUpSm;
