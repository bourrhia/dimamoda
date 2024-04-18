import React from "react";
import HandlesLoisirsXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesLoisirsXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const loisirsXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesLoisirsXs fourPrdsImg={fourPrdsImg} />;
};

export default loisirsXs;
