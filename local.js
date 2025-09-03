import fetch from "node-fetch";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // local testing only

export default async function handler(req, res) {
  try {
    // Parse query parameters (works in Vercel + local)
    const base = `http://${req.headers.host || 'localhost'}`;
    const urlObj = new URL(req.url || '/', base);

    // Accept either ?tags= or ?tag=
    const tags = urlObj.searchParams.get("tags") || urlObj.searchParams.get("tag");

    // Build the API URL
    const upstreamUrl = tags
      ? `https://api.quotable.io/random?tags=${encodeURIComponent(tags)}`
      : "https://api.quotable.io/random";

    const response = await fetch(upstreamUrl);
    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch quote",
      details: error.message,
    });
  }
}
