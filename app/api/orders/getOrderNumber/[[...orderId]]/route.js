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
        status: 400,
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

    if (!order || orderId === "null") {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(order.orderId), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur de modification adresse livraison:", error);

    return new Response(
      JSON.stringify({ error: "Echec de modification adresse livraison" }),
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
