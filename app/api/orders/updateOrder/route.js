import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  const order = await request.json();

  const { ObjectId } = require("mongodb");

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    let order_Id;

    if (!order.orderId) {
      return new Response(JSON.stringify({ error: "order Id is null" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      order_Id = new ObjectId(order.orderId);
    }

    let response = await db.collection("orders").updateOne(
      { _id: order_Id },
      {
        $set: {
          tel: order.tel,
          nom: order.nom,
          prenom: order.prenom,
          adresseLiv: order.adresseLiv,
          adresseLiv2: order.adresseLiv2,
          ville: order.ville,
          codePostal: order.codePostal,
          region: order.region,
          email: order.email,
          dateModification: new Date(),
        },
      }
    );

    const jsonResponse = {
      successUpd: "ok",
    };

    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur de modification adresse livraison:", error);

    return new Response("Echec de modification adresse livraison", {
      status: 500,
    });
  } finally {
  }
}
