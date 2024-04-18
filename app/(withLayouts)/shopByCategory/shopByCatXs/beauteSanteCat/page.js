import React from "react";
import HandlesBtStXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesBtStXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const BtStXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesBtStXs fourPrdsImg={fourPrdsImg} />;
};

export default BtStXs;
