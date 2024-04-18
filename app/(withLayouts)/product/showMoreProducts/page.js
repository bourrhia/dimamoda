import React from "react";
import AllPrdts1 from "../../../../components/ShowProductList/ProductListAllDevices/AllPrdts1";
import clientPromise from "../../../../lib/mongodb";
import Box from "@mui/material/Box";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const showMoreProducts = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));
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
        <AllPrdts1 imgmrv={prdsImg} />
      </Box>
    </Box>
  );
};

export default showMoreProducts;
