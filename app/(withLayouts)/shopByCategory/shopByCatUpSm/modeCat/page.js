import React from "react";
import HandlesModeUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesModeUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const modeUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesModeUpSm prdsImg={prdsImg} />;
};

export default modeUpSm;
