import React from "react";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../components/ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../components/ShowProductList/ProductListUpSm/PrdListUpSm1";
import PrdListUpMd2 from "../../components/ShowProductList/ProductListUpSm/PrdListUpMd2";
import PrdListXs1 from "../../components/ShowProductList/ProductListMobile/PrdListXs1";
import clientPromise from "../../lib/mongodb";

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
    highlight: "Y",
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

export default async function Home() {
  const searchCatTerm1 = "subcategory1";
  const searchCatTerm2 = "subcategory2";

  const prodTendence = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Tendences"))
  );

  const fourProdTendence = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Tendences", 4))
  );
  const catTitleTendence = "Tendences";

  const prodFemme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Femme"))
  );

  const fourProdFemme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Femme", 4))
  );
  const catTitleFemme = "Vêtements pour femmes";

  const prodHomme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Homme"))
  );

  const fourProdHomme = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Homme", 4))
  );
  const catTitleHomme = "Vêtements pour Hommes";

  const prodFille = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Fille"))
  );

  const fourProdFille = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Fille", 4))
  );
  const catTitleFille = "Vêtements pour Filles";

  const prodGarcon = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Garçon"))
  );

  const fourProdGarcon = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm1, "Garçon", 4))
  );
  const catTitleGarcon = "Vêtements pour Garçons";

  const catFemme = "Femme";
  const catHomme = "Homme";
  const catFille = "Fille";
  const catGarcon = "Garçon";
  const catTendence = "Tendences";

  const nbrProdTendence = 20;
  const nbrProdFemme = prodFemme?.length || 0;
  const nbrProdHomme = prodHomme?.length || 0;
  const nbrProdFille = prodFille?.length || 0;
  const nbrProdGarcon = prodGarcon?.length || 0;

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
        <PrdListOnlySm1
          imgmrv={prodTendence}
          category={catTendence}
          catTitle={catTitleTendence}
          searchTerm={searchCatTerm2}
          otherSearchTerm={searchCatTerm1}
          nbrProd={nbrProdTendence}
        />

        <PrdListOnlySm1
          imgmrv={prodFemme}
          category={catFemme}
          catTitle={catTitleFemme}
          searchTerm={searchCatTerm1}
          otherSearchTerm={searchCatTerm1}
          nbrProd={nbrProdFemme}
        />

        <PrdListOnlySm1
          imgmrv={prodHomme}
          category={catHomme}
          catTitle={catTitleHomme}
          searchTerm={searchCatTerm1}
          otherSearchTerm={searchCatTerm1}
          nbrProd={nbrProdHomme}
        />

        <PrdListOnlySm1
          imgmrv={prodFille}
          category={catFille}
          catTitle={catTitleFille}
          searchTerm={searchCatTerm1}
          otherSearchTerm={searchCatTerm1}
          nbrProd={nbrProdFille}
        />

        <PrdListOnlySm1
          imgmrv={prodGarcon}
          category={catGarcon}
          catTitle={catTitleGarcon}
          searchTerm={searchCatTerm1}
          otherSearchTerm={searchCatTerm1}
          nbrProd={nbrProdGarcon}
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
          <PrdListUpMd2
            imgmrv={prodTendence}
            category={catTendence}
            catTitle={catTitleTendence}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm2}
            nbrProd={nbrProdTendence}
          />
        </Box>

        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          <PrdListUpSm1
            imgmrv={prodFemme}
            category={catFemme}
            catTitle={catTitleFemme}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdFemme}
          />
        </Box>

        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          <PrdListUpSm1
            imgmrv={prodHomme}
            category={catHomme}
            catTitle={catTitleHomme}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdHomme}
          />
        </Box>

        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          <PrdListUpSm1
            imgmrv={prodFille}
            category={catFille}
            catTitle={catTitleFille}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdFille}
          />
        </Box>

        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          <PrdListUpSm1
            imgmrv={prodGarcon}
            category={catGarcon}
            catTitle={catTitleGarcon}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdGarcon}
          />
        </Box>
      </Box>

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
                  imgmrv={fourProdTendence}
                  category={catTendence}
                  catTitle={catTitleTendence}
                  searchTerm={searchCatTerm2}
                  otherSearchTerm={searchCatTerm2}
                  nbrProd={nbrProdTendence}
                />

                <PrdListXs1
                  imgmrv={fourProdFemme}
                  category={catFemme}
                  catTitle={catTitleFemme}
                  searchTerm={searchCatTerm1}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdFemme}
                />

                <PrdListXs1
                  imgmrv={fourProdHomme}
                  category={catHomme}
                  catTitle={catTitleHomme}
                  searchTerm={searchCatTerm1}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdHomme}
                />

                <PrdListXs1
                  imgmrv={fourProdFille}
                  category={catFille}
                  catTitle={catTitleFille}
                  searchTerm={searchCatTerm1}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdFille}
                />

                <PrdListXs1
                  imgmrv={fourProdGarcon}
                  category={catGarcon}
                  catTitle={catTitleGarcon}
                  searchTerm={searchCatTerm1}
                  otherSearchTerm={searchCatTerm1}
                  nbrProd={nbrProdGarcon}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
