import React from "react";
import HandlesAntqUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesAntqUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const AntqUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesAntqUpSm prdsImg={prdsImg} />;
};

export default AntqUpSm;
