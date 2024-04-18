import React from "react";
import HandlesTendUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesTendUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const tendUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesTendUpSm prdsImg={prdsImg} />;
};

export default tendUpSm;
