import React from "react";
import clientPromise from "../../../../../lib/mongodb";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../../../../components/ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../../../../components/ShowProductList/ProductListUpSm/PrdListUpSm1";
import ShowCategory from "../../../../../components/ShowProductList/ProductListAllDevices/ShowCategory";

const sanitizeData = (data) =>
  data.map((item) => ({
    ...item,
    _id: item._id?.toString(),
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

async function getProductByCategory(searchCatTerm, category, limit = null) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const query = {
    ...(category && { [searchCatTerm]: category }),
  };

  const pipeline = [
    { $match: query },
    {
      $group: {
        _id: { subcategory: { $ifNull: ["$subcategory3", "Autres"] } },
        products: { $push: "$$ROOT" },
      },
    },
    { $project: { _id: 0, subcategory: "$_id.subcategory", products: 1 } },
    ...(limit ? [{ $limit: limit }] : []),
  ];

  const groupedProducts = await db
    .collection("product")
    .aggregate(pipeline)
    .toArray();

  groupedProducts.forEach((group) => {
    group.products = sanitizeData(group.products);
  });

  return groupedProducts;
}

export const HommeUpSm = async () => {
  const searchCatTerm1 = "subcategory1";
  const searchCatTerm3 = "subcategory3";
  const catTitle = "Vêtements pour homme";

  const groupedProducts = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Homme"))
  );

  const catHomme = "Homme";

  return (
    <>
      <ShowCategory catTitle={catTitle} />
      {groupedProducts.map(({ subcategory, products }) => {
        const nbrProd = products?.length || 0;
        return (
          <Box key={subcategory}>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "none" },
                marginLeft: "32px",
                marginRight: "32px",
                maxWidth: "1248px",
                marginBottom: "64px",
                marginTop: "32px",
                width: "100%",
                height: "100%",
              }}
            >
              <PrdListOnlySm1
                imgmrv={products}
                category={catHomme}
                catTitle={`${subcategory}`}
                searchTerm={searchCatTerm1}
                otherSearchTerm={searchCatTerm3}
                nbrProd={nbrProd}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
                marginLeft: "32px",
                marginRight: "32px",
                maxWidth: "1248px",
                marginBottom: "64px",
                marginTop: "32px",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  marginBottom: "32px !important",
                }}
              >
                <PrdListUpSm1
                  imgmrv={products}
                  category={catHomme}
                  catTitle={`${subcategory}`}
                  searchTerm={searchCatTerm1}
                  otherSearchTerm={searchCatTerm3}
                  nbrProd={nbrProd}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default HommeUpSm;
