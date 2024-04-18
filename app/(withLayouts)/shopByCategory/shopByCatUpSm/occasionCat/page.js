import React from "react";
import HandlesOcasUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesOcasUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const ocasUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesOcasUpSm prdsImg={prdsImg} />;
};

export default ocasUpSm;
