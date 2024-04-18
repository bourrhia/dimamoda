import React from "react";
import HandlesTendXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesTendXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const tendXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesTendXs fourPrdsImg={fourPrdsImg} />;
};

export default tendXs;
