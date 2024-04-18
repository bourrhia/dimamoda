import React from "react";
import HandlesLoisirsUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesLoisirsUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const loisirsUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesLoisirsUpSm prdsImg={prdsImg} />;
};

export default loisirsUpSm;
