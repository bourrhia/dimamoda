export async function POST(request) {
  const initialPost = await request.json();

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Response.json({ data: initialPost });
}
