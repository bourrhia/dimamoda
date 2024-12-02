import React from "react";
import AllPrdtsXs1 from "../../../../../../../../components/ShowProductList/ProductListMobile/AllPrdtsXs1";
import clientPromise from "../../../../../../../../lib/mongodb";
import Box from "@mui/material/Box";

export const showMoreProductsXs = async ({ params }) => {
  const category = decodeURIComponent(params.category || "");
  const searchCatTerm = decodeURIComponent(params.searchTerm || "");
  const catTitle = decodeURIComponent(params.catTitle || "");
  const searchCatTerm2 = decodeURIComponent(params.otherSearchTerm || "");

  const sanitizeData = (data) =>
    data.map((item) => ({
      ...item,
      _id: item._id?.toString(), // Convert MongoDB ObjectId to a string
      prdDetailsBySize: item.prdDetailsBySize?.map((sizeDetail) => ({
        ...sizeDetail,
        detailsByColor: sizeDetail.detailsByColor?.map((colorDetail) => ({
          ...colorDetail,
          imgThumbnails: colorDetail.imgThumbnails?.map((thumbnail) => ({
            ...thumbnail,
          })),
        })),
      })),
    }));

  async function getProductByCategory(
    searchCatTerm,
    searchCatTerm2,
    category,
    catTitle,
    limit = null
  ) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const query =
      searchCatTerm2 === "subcategory3"
        ? {
            ...(category && { [searchCatTerm]: category }),
            ...(catTitle && { [searchCatTerm2]: catTitle }),
          }
        : {
            ...(category && { [searchCatTerm]: category }),
          };

    const options = {
      projection: { _id: 0 },
      limit: limit || 0,
    };

    const products = await db
      .collection("product")
      .find(query, options)
      .toArray();
    return products ? sanitizeData(products) : null;
  }

  const allProducts =
    JSON.parse(
      JSON.stringify(
        await getProductByCategory(
          searchCatTerm,
          searchCatTerm2,
          category,
          catTitle
        )
      )
    ) || null;

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        display: "block",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          borderTop: "solid 1px #D5DBDB",
          display: "flex",
        }}
      >
        <AllPrdtsXs1 imgmrv={allProducts} catTitle={catTitle} />
      </Box>
    </Box>
  );
};

export default showMoreProductsXs;
