import React from "react";
import HandlesVenteFXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesVenteFXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const venteFXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesVenteFXs fourPrdsImg={fourPrdsImg} />;
};

export default venteFXs;
