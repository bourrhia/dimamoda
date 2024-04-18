import React from "react";
import HandlesHotVacUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesHotVacUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const HotVacUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesHotVacUpSm prdsImg={prdsImg} />;
};

export default HotVacUpSm;
