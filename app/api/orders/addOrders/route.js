import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  const order = await request.json();

  const { ObjectId } = require("mongodb");

  var Double = require("mongodb").Double;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection("orders").insertOne({
      tel: order.tel,
      nom: order.nom,
      prenom: order.prenom,
      adresseLiv: order.adresseLiv,
      adresseLiv2: order.adresseLiv2,
      ville: order.ville,
      codePostal: order.codePostal,
      region: order.region,
      email: order.email,
      totalOrders: new Double(order.totalOrders),
      mtLivOrder: new Double(order.mtLivOrder),
      nbrItems: order.nbrItems,
      cartItems: order.cartItems,
      dateCreation: new Date(),
      // dateModification: new Date(),
    });

    const order_Id = new ObjectId(result.insertedId);

    return new Response(JSON.stringify(order_Id), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur de creation de commande:", error);

    return new Response("Echec de creation de commande", {
      status: 500,
    });
  } finally {
  }
}
