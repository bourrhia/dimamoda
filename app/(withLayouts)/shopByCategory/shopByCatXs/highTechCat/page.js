import React from "react";
import HandlesHighTecXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesHighTecXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const HighTecXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesHighTecXs fourPrdsImg={fourPrdsImg} />;
};

export default HighTecXs;
