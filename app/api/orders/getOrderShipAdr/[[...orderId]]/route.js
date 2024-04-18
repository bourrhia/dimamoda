import clientPromise from "../../../../../lib/mongodb";

export async function GET(request, { params }) {
  const orderId = params.orderId[0];

  const { ObjectId } = require("mongodb");

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    let order_Id;

    if (!orderId || orderId === "null") {
      return new Response(JSON.stringify({ error: "order Id is null" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      order_Id = new ObjectId(orderId);
    }

    const order = await db
      .collection("orders")
      .findOne({ _id: order_Id }, { _id: 0 });

    if (!order) {
      return new Response(
        JSON.stringify({ error: "Cette commande est non trouvée" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur pour trouver cette commande:", error);

    return new Response(
      JSON.stringify({ error: "Echec pour trouver cette commande" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
  }
}
