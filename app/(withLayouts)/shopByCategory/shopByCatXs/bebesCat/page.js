import React from "react";
import HandlesBebesXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesBebesXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const BebesXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesBebesXs fourPrdsImg={fourPrdsImg} />;
};

export default BebesXs;
