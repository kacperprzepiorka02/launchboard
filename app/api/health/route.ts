export async function GET() {
  return Response.json({
    status: "ok",
    service: "launchboard",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}