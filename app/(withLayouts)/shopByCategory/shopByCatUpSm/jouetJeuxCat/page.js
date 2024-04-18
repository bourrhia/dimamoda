import React from "react";
import HandlesJouJeuUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesJouJeuUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const jouJeuUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesJouJeuUpSm prdsImg={prdsImg} />;
};

export default jouJeuUpSm;
