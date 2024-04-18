import React from "react";
import HandlesJouJeuXs from "../../../../../components/LayoutFiles/NavBar/shopByCategoryXs/HandlesJouJeuXs";
import clientPromise from "../../../../../lib/mongodb";

async function getFourPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myFourPrdImg = await db.collection("product").find().limit(4).toArray();

  return myFourPrdImg;
}

export const jouJeuXs = async () => {
  const fourPrdsImg = JSON.parse(JSON.stringify(await getFourPrdImg()));

  return <HandlesJouJeuXs fourPrdsImg={fourPrdsImg} />;
};

export default jouJeuXs;
