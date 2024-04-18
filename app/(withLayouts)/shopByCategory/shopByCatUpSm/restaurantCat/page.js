import React from "react";
import HandlesRestUpSm from "../../../../../components/LayoutFiles/NavBar/shopByCategoryUpSm/HandlesRestUpSm";
import clientPromise from "../../../../../lib/mongodb";

async function getPrdImg() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const myPrdImg = await db.collection("product").find().limit(21).toArray();

  return myPrdImg;
}

export const restUpSm = async () => {
  const prdsImg = JSON.parse(JSON.stringify(await getPrdImg()));

  return <HandlesRestUpSm prdsImg={prdsImg} />;
};

export default restUpSm;
