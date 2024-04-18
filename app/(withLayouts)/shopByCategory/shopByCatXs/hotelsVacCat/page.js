import React from "react";
import HandlesHotVacXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesHotVacXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const HotVacXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesHotVacXs fourPrdsImg={fourPrdsImg} />;
};

export default HotVacXs;
