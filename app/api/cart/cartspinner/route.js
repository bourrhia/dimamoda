export async function POST(request) {
  const initialPost = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return Response.json({ data: initialPost });
}
