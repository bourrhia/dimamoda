import React from "react";
import HandlesMaisJarUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesMaisJarUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const maisJarUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesMaisJarUpSm prdsImg={prdsImg} />;
};

export default maisJarUpSm;