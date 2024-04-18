import React from "react";
import HandlesMaisJarXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesMaisJarXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const maisJarXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesMaisJarXs fourPrdsImg={fourPrdsImg} />;
};

export default maisJarXs;
