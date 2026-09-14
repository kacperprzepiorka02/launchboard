export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const test = searchParams.get("test");

  if (test === "error") {
    throw new Error("Intentional health check test error");
  }

  return Response.json({
    status: "ok",
    service: "launchboard",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}