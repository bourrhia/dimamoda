import React from "react";
import HandlesAntqXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesAntqXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const AntqXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesAntqXs fourPrdsImg={fourPrdsImg} />;
};

export default AntqXs;
