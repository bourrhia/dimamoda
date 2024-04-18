import React from "react";
import HandlesMarFetXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesMarFetXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const marFetXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesMarFetXs fourPrdsImg={fourPrdsImg} />;
};

export default marFetXs;
