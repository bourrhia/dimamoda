import React from "react";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../../../../components/ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../../../../components/ShowProductList/ProductListUpSm/PrdListUpSm1";
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

  const catTitleBigSizeFemme = "Grandes tailles pour femme";

  const prodBigSizehomme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Bigsizehomme"))
  );

  const catTitleBigSizeHomme = "Grandes tailles pour homme";

  const catBigSizeFemme = "Bigsizefemme";
  const catBigSizeHomme = "Bigsizehomme";

  const nbrProdBigSizeFemme = prodBigSizeFemme?.length || 0;
  const nbrProdBigSizeHomme = prodBigSizehomme?.length || 0;

  return (
    <>
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
        {prodBigSizeFemme.length !== 0 ? (
          <PrdListOnlySm1
            imgmrv={prodBigSizeFemme}
            category={catBigSizeFemme}
            catTitle={catTitleBigSizeFemme}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdBigSizeFemme}
          />
        ) : null}

        {prodBigSizehomme.length !== 0 ? (
          <PrdListOnlySm1
            imgmrv={prodBigSizehomme}
            category={catBigSizeHomme}
            catTitle={catTitleBigSizeHomme}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdBigSizeHomme}
          />
        ) : null}
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
          {prodBigSizeFemme.length !== 0 ? (
            <PrdListUpSm1
              imgmrv={prodBigSizeFemme}
              category={catBigSizeFemme}
              catTitle={catTitleBigSizeFemme}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdBigSizeFemme}
            />
          ) : null}
        </Box>

        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodBigSizehomme.length !== 0 ? (
            <PrdListUpSm1
              imgmrv={prodBigSizehomme}
              category={catBigSizeHomme}
              catTitle={catTitleBigSizeHomme}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdBigSizeHomme}
            />
          ) : null}
        </Box>
      </Box>
    </>
  );
}
