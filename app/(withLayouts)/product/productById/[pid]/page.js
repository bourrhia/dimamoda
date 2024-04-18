import React from "react";

import Box from "@mui/material/Box";
import clientPromise from "../../../../../lib/mongodb";
import ProdViewXs from "../../../../../components/ShowProductList/ProductListMobile/ProdViewXs";
import ProdViewUpSm from "../../../../../components/ShowProductList/ProductListUpSm/ProdViewUpSm";

export const dynamicParams = true;

async function generateAllPrds() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const allPrdsImg = await db.collection("product").find().limit(21).toArray();

  return allPrdsImg;
}

// Return a list of `params` to populate the [pid] dynamic segment
export async function generateStaticParams() {
  const allPrdsMrventes = JSON.parse(JSON.stringify(await generateAllPrds()));

  // Get the paths we want to pre-render based on posts
  return allPrdsMrventes.map((prod) => ({
    pid: prod.productId.toString(),
  }));
}

async function getAllPrd(params) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const { pid } = params;

  const allPrds = await db
    .collection("product")
    .find({ productId: parseInt(pid) })
    .limit(1)
    .toArray();

  return allPrds;
}

const Prodview = async ({ params }) => {
  const prodSelected = await getAllPrd(params);
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <ProdViewXs selectedprd={prodSelected} />
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
      >
        <ProdViewUpSm selectedprd={prodSelected} />
      </Box>
    </Box>
  );
};

export default Prodview;
