import React from "react";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../components/ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../components/ShowProductList/ProductListUpSm/PrdListUpSm1";
import PrdListOnlySm2 from "../../components/ShowProductList/ProductListUpSm/PrdListOnlySm2";
import PrdListUpSm2 from "../../components/ShowProductList/ProductListUpSm/PrdListUpSm2";
import PrdListUpMd3 from "../../components/ShowProductList/ProductListUpSm/PrdListUpMd3";
import PrdListXs1 from "../../components/ShowProductList/ProductListMobile/PrdListXs1";
import PrdListXs2 from "../../components/ShowProductList/ProductListMobile/PrdListXs2";
import clientPromise from "../../lib/mongodb";
import Image from "next/image";

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

  const prodMrVentes = JSON.parse(
    JSON.stringify(
      await getProductByCategory(searchCatTerm2, "Meilleuresventes")
    )
  );

  const fourProdMrVentes = JSON.parse(
    JSON.stringify(
      await getProductByCategory(searchCatTerm2, "Meilleuresventes", 4)
    )
  );
  const catTitleMrVentes = "Meilleures ventes";

  const prodBonsPlans = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Bonsplans"))
  );

  const fourProdBonsplans = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Bonsplans", 4))
  );

  const catTitleBonsPlans = "Bons plans";

  const prodNouveautes = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Nouveautés"))
  );

  const fourProdNouveautes = JSON.parse(
    JSON.stringify(await getProductByCategory(searchCatTerm2, "Nouveautés", 4))
  );

  const catTitleNouveautes = "Nouveautés";

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

  const catFemme = "Femme";
  const catHomme = "Homme";
  const catFille = "Fille";
  const catGarcon = "Garçon";
  const catTendence = "Tendences";
  const catMrVentes = "Meilleuresventes";
  const catBonsPlans = "Bonsplans";
  const catNouveautes = "Nouveautés";
  const catBigSizeFemme = "Bigsizefemme";
  const catBigSizeHomme = "Bigsizehomme";

  const nbrProdTendence = prodTendence?.length || 0;
  const nbrProdMrVentes = prodMrVentes?.length || 0;
  const nbrProdBonsPlans = prodBonsPlans?.length || 0;
  const nbrProdNouveautes = prodNouveautes?.length || 0;
  const nbrProdFemme = prodFemme?.length || 0;
  const nbrProdHomme = prodHomme?.length || 0;
  const nbrProdFille = prodFille?.length || 0;
  const nbrProdGarcon = prodGarcon?.length || 0;
  const nbrProdBigSizeFemme = prodBigSizeFemme?.length || 0;
  const nbrProdBigSizeHomme = prodBigSizehomme?.length || 0;

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            // md: "block",
            // lg: "block",
          },
          // width: "100%",
          width: "100vw",
          //width: "1200",
          // maxWidth: "1500px",
          //  margin: "0 auto",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            //maxHeight: '230px',
            //height: "180px",
            height: "350px",
            position: "relative",
            marginBottom: "0 !important",
            width: "100vw",
            //
            //textAlign: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              // overflow: 'hidden',
              position: "relative",
              width: "100vw",

              marginBottom: "0 !important",
              padding: 0,
              margin: 0,
            }}
          >
            <Image
              src="/bandimalamode.png"
              alt="Image"
              fill
              priority
              //sizes="(min-width: 1200px) 16vw, (min-width: 1083px) 20vw, (min-width: 900px) 25vw,(min-width: 600px) 33vw"
              style={{
                objectFit: "contain",
                //padding: "10px 10px 10px 10px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          // width: "100%",
          width: "100vw",
          //width: "1200",
          // maxWidth: "1500px",
          //  margin: "0 auto",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            //maxHeight: '230px',
            height: "110px",
            //height: "600px",
            position: "relative",
            marginBottom: "0 !important",
            width: "100vw",
            //
            //textAlign: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              // overflow: 'hidden',
              position: "relative",
              width: "100vw",

              marginBottom: "0 !important",
              padding: 0,
              margin: 0,
            }}
          >
            <Image
              src="/bandimalamode.png"
              alt="Image"
              fill
              priority
              //sizes="(min-width: 1200px) 16vw, (min-width: 1083px) 20vw, (min-width: 900px) 25vw,(min-width: 600px) 33vw"
              style={{
                objectFit: "contain",
                //padding: "10px 10px 10px 10px",
              }}
            />
          </Box>
        </Box>
      </Box>
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
        {prodTendence.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodTendence}
            category={catTendence}
            catTitle={catTitleTendence}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdTendence}
          />
        ) : null}

        {prodMrVentes.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodMrVentes}
            category={catMrVentes}
            catTitle={catTitleMrVentes}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdMrVentes}
          />
        ) : null}

        {prodBonsPlans.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodBonsPlans}
            category={catBonsPlans}
            catTitle={catTitleBonsPlans}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdBonsPlans}
          />
        ) : null}

        {prodNouveautes.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodNouveautes}
            category={catNouveautes}
            catTitle={catTitleNouveautes}
            searchTerm={searchCatTerm2}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdNouveautes}
          />
        ) : null}

        {prodFemme.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodFemme}
            category={catFemme}
            catTitle={catTitleFemme}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdFemme}
          />
        ) : null}

        {prodHomme.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodHomme}
            category={catHomme}
            catTitle={catTitleHomme}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdHomme}
          />
        ) : null}

        {prodFille.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodFille}
            category={catFille}
            catTitle={catTitleFille}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdFille}
          />
        ) : null}

        {prodGarcon.length !== 0 ? (
          <PrdListOnlySm2
            imgmrv={prodGarcon}
            category={catGarcon}
            catTitle={catTitleGarcon}
            searchTerm={searchCatTerm1}
            otherSearchTerm={searchCatTerm1}
            nbrProd={nbrProdGarcon}
          />
        ) : null}

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
          {prodTendence.length !== 0 ? (
            <PrdListUpMd3
              imgmrv={prodTendence}
              category={catTendence}
              catTitle={catTitleTendence}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm2}
              nbrProd={nbrProdTendence}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodMrVentes.length !== 0 ? (
            <PrdListUpMd3
              imgmrv={prodMrVentes}
              category={catMrVentes}
              catTitle={catTitleMrVentes}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm2}
              nbrProd={nbrProdMrVentes}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodBonsPlans.length !== 0 ? (
            <PrdListUpMd3
              imgmrv={prodBonsPlans}
              category={catBonsPlans}
              catTitle={catTitleBonsPlans}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm2}
              nbrProd={nbrProdBonsPlans}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodNouveautes.length !== 0 ? (
            <PrdListUpMd3
              imgmrv={prodNouveautes}
              category={catNouveautes}
              catTitle={catTitleNouveautes}
              searchTerm={searchCatTerm2}
              otherSearchTerm={searchCatTerm2}
              nbrProd={nbrProdNouveautes}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodFemme.length !== 0 ? (
            <PrdListUpSm2
              imgmrv={prodFemme}
              category={catFemme}
              catTitle={catTitleFemme}
              searchTerm={searchCatTerm1}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdFemme}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodHomme.length !== 0 ? (
            <PrdListUpSm2
              imgmrv={prodHomme}
              category={catHomme}
              catTitle={catTitleHomme}
              searchTerm={searchCatTerm1}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdHomme}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodFille.length !== 0 ? (
            <PrdListUpSm2
              imgmrv={prodFille}
              category={catFille}
              catTitle={catTitleFille}
              searchTerm={searchCatTerm1}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdFille}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            marginBottom: "32px !important",
          }}
        >
          {prodGarcon.length !== 0 ? (
            <PrdListUpSm2
              imgmrv={prodGarcon}
              category={catGarcon}
              catTitle={catTitleGarcon}
              searchTerm={searchCatTerm1}
              otherSearchTerm={searchCatTerm1}
              nbrProd={nbrProdGarcon}
            />
          ) : null}
        </Box>
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
                {fourProdTendence.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdTendence}
                    category={catTendence}
                    catTitle={catTitleTendence}
                    searchTerm={searchCatTerm2}
                    otherSearchTerm={searchCatTerm2}
                    nbrProd={nbrProdTendence}
                  />
                ) : null}

                {fourProdMrVentes.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdMrVentes}
                    category={catMrVentes}
                    catTitle={catTitleMrVentes}
                    searchTerm={searchCatTerm2}
                    otherSearchTerm={searchCatTerm2}
                    nbrProd={nbrProdMrVentes}
                  />
                ) : null}

                {fourProdBonsplans.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdBonsplans}
                    category={catBonsPlans}
                    catTitle={catTitleBonsPlans}
                    searchTerm={searchCatTerm2}
                    otherSearchTerm={searchCatTerm2}
                    nbrProd={nbrProdBonsPlans}
                  />
                ) : null}

                {fourProdNouveautes.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdNouveautes}
                    category={catNouveautes}
                    catTitle={catTitleNouveautes}
                    searchTerm={searchCatTerm2}
                    otherSearchTerm={searchCatTerm2}
                    nbrProd={nbrProdNouveautes}
                  />
                ) : null}

                {fourProdFemme.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdFemme}
                    category={catFemme}
                    catTitle={catTitleFemme}
                    searchTerm={searchCatTerm1}
                    otherSearchTerm={searchCatTerm1}
                    nbrProd={nbrProdFemme}
                  />
                ) : null}

                {fourProdHomme.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdHomme}
                    category={catHomme}
                    catTitle={catTitleHomme}
                    searchTerm={searchCatTerm1}
                    otherSearchTerm={searchCatTerm1}
                    nbrProd={nbrProdHomme}
                  />
                ) : null}

                {fourProdFille.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdFille}
                    category={catFille}
                    catTitle={catTitleFille}
                    searchTerm={searchCatTerm1}
                    otherSearchTerm={searchCatTerm1}
                    nbrProd={nbrProdFille}
                  />
                ) : null}

                {fourProdGarcon.length !== 0 ? (
                  <PrdListXs2
                    imgmrv={fourProdGarcon}
                    category={catGarcon}
                    catTitle={catTitleGarcon}
                    searchTerm={searchCatTerm1}
                    otherSearchTerm={searchCatTerm1}
                    nbrProd={nbrProdGarcon}
                  />
                ) : null}

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
    </>
  );
}
