import React from "react";
import HandlesModeXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesModeXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const modeXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesModeXs fourPrdsImg={fourPrdsImg} />;
};

export default modeXs;
