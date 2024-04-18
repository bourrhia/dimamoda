import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const products = await db.collection("product").find({}).toArray();

    if (!products) {
      return new Response(JSON.stringify({ error: "Products not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur de produits non trouvés:", error);

    return new Response(
      JSON.stringify({ error: "Echec pour trouver la liste de produits" }),
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
