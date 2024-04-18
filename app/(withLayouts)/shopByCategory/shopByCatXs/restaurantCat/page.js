import React from "react";
import HandlesRestXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesRestXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const restXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesRestXs fourPrdsImg={fourPrdsImg} />;
};

export default restXs;
