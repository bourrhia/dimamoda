import React from "react";
import clientPromise from "../../../../../lib/mongodb";
import Box from "@mui/material/Box";
import PrdListXs1 from "../../../../../components/ShowProductList/ProductListMobile/PrdListXs1";
import ShowCategoryXs from "../../../../../components/ShowProductList/ProductListAllDevices/ShowCategoryXs";

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

export const HommeXs = async () => {
  const searchCatTerm1 = "subcategory1";
  const searchCatTerm3 = "subcategory3";
  const catTitle = "Vêtements pour homme";

  const groupedProducts = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Homme"))
  );

  const catHomme = "Homme";

  return (
    <>
      <ShowCategoryXs catTitle={catTitle} />
      {groupedProducts.map(({ subcategory, products }) => {
        const nbrProd = products?.length || 0;
        const limitedProducts = products.slice(0, 4);

        return (
          <Box key={subcategory}>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                backgroundColor: "#D5DBDB",
                width: "100%",
                minHeight: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    fontSize: "15px",
                    marginTop: "-5px",
                    fontWeight: 300,
                    "&::before,&::after": {
                      display: "table",
                      content: '""',
                      lineHeight: 0,
                      fontSize: 0,
                    },

                    "&::after": {
                      clear: "both",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <PrdListXs1
                        imgmrv={limitedProducts}
                        category={catHomme}
                        catTitle={`${subcategory}`}
                        searchTerm={searchCatTerm1}
                        otherSearchTerm={searchCatTerm3}
                        nbrProd={nbrProd}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default HommeXs;
