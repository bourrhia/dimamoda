import React from "react";
import HandlesVenteFUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesVenteFUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const venteFUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesVenteFUpSm prdsImg={prdsImg} />;
};

export default venteFUpSm;
