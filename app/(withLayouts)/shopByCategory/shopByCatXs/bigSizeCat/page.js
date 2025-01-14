import React from "react";
import Box from "@mui/material/Box";
import PrdListXs1 from "../../../../../components/ShowProductList/ProductListMobile/PrdListXs1";
import clientPromise from "../../../../../lib/mongodb";

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

const getProductByCategory = async (searchCatTerm, category, limit = null) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const query = {
    [searchCatTerm]: category,
  };

  const options = {
    projection: { _id: 0 },
    limit: limit || 0,
  };

  const products = await db
    .collection("product")
    .find(query, options)
    .toArray();
  return sanitizeData(products);
};

export default async function BigSizeCat() {
  const searchCatTerm1 = "subcategory1";
  const searchCatTerm2 = "subcategory2";

  const prodBigSizeFemme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Bigsizefemme"))
  );

  const fourProdBigSizeFemme = JSON.parse(
    JSON.stringify(
      await getProductByCategory(searchCatTerm2, "Bigsizefemme", 4)
    )
  );

  const catTitleBigSizeFemme = "Grandes tailles pour femme";

  const prodBigSizehomme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Bigsizehomme"))
  );

  const fourProdBigSizeHomme = JSON.parse(
    JSON.stringify(
      await getProductByCategory(searchCatTerm2, "Bigsizehomme", 4)
    )
  );

  const catTitleBigSizeHomme = "Grandes tailles pour homme";

  const catBigSizeFemme = "Bigsizefemme";
  const catBigSizeHomme = "Bigsizehomme";

  const nbrProdBigSizeFemme = prodBigSizeFemme?.length || 0;
  const nbrProdBigSizeHomme = prodBigSizehomme?.length || 0;

  return (
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
              {fourProdBigSizeFemme.length !== 0 ? (
                <PrdListXs1
                  imgmrv={fourProdBigSizeFemme}
                  category={catBigSizeFemme}
                  catTitle={catTitleBigSizeFemme}
                  searchTerm={searchCatTerm2}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdBigSizeFemme}
                />
              ) : null}

              {fourProdBigSizeHomme.length !== 0 ? (
                <PrdListXs1
                  imgmrv={fourProdBigSizeHomme}
                  category={catBigSizeHomme}
                  catTitle={catTitleBigSizeHomme}
                  searchTerm={searchCatTerm2}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdBigSizeHomme}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
