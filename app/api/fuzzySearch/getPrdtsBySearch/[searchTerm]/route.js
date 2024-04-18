import clientPromise from "../../../../../lib/mongodb";

export async function GET(request, { params }) {
  const searchTerm = params.searchTerm;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const results = await db
      .collection("product")
      .find(
        { productName: { $regex: new RegExp(searchTerm, "i") } },
        {
          projection: {
            productId: 1,
            productName: 1,
            imgJpg: 1,
            etatprd: 1,
            descPrd: 1,
            prixAct: 1,
            prixIni: 1,
            red: 1,
            prixSymbol: 1,
          },
        }
      )
      .toArray();

    if (!results) {
      return new Response(JSON.stringify({ error: "Products not found" }), {
        status: 404,

        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(results), {
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
