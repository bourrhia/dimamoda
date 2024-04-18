import React from "react";
import HandlesHighTecUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesHighTecUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const HighTecUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesHighTecUpSm prdsImg={prdsImg} />;
};

export default HighTecUpSm;
