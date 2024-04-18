import React from "react";
import HandlesBebesUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesBebesUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const BebesUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesBebesUpSm prdsImg={prdsImg} />;
};

export default BebesUpSm;
