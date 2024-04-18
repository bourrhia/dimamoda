import React from "react";
import HandlesBtStUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesBtStUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const BtStUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesBtStUpSm prdsImg={prdsImg} />;
};

export default BtStUpSm;
