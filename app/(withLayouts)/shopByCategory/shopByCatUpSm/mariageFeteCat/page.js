import React from "react";
import HandlesMarFetUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesMarFetUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const marFetUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesMarFetUpSm prdsImg={prdsImg} />;
};

export default marFetUpSm;
