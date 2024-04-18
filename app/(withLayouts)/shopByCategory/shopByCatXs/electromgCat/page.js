import React from "react";
import HandlesElecmgXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesElecmgXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const ElecmgXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesElecmgXs fourPrdsImg={fourPrdsImg} />;
};

export default ElecmgXs;
