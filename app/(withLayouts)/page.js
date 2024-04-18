import React from "react";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../components/ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../components/ShowProductList/ProductListUpSm/PrdListUpSm1";
import PrdListUpMd1 from "../../components/ShowProductList/ProductListUpSm/PrdListUpMd1";
import PrdListUpMd2 from "../../components/ShowProductList/ProductListUpSm/PrdListUpMd2";
import PrdListXs1 from "../../components/ShowProductList/ProductListMobile/PrdListXs1";
import PrdListXs2 from "../../components/ShowProductList/ProductListMobile/PrdListXs2";
import clientPromise from "../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const myPrdImg = await db.collection("product").find().limit(21).toArray();
  return myPrdImg;
}

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();
  return myFourPrdImg;
}

export default async function Home() {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

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
        <PrdListOnlySm1 imgmrv={prdsImg} />
        <PrdListUpSm1 imgmrv={prdsImg} />
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
        <PrdListUpSm1 imgmrv={prdsImg} />
        <PrdListUpMd1 imgmrv={prdsImg} />
        <PrdListUpMd2 imgmrv={prdsImg} />
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
                <PrdListXs1 imgmrv={fourPrdsImg} />
                <PrdListXs2 imgmrv={fourPrdsImg} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
