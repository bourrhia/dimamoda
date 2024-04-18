import React from "react";
import HandlesElecmgUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesElecmgUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const ElecmgUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesElecmgUpSm prdsImg={prdsImg} />;
};

export default ElecmgUpSm;
