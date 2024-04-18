import React from "react";
import HandlesOcasXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesOcasXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const ocasXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesOcasXs fourPrdsImg={fourPrdsImg} />;
};

export default ocasXs;
