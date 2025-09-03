export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Handle preflight
  }

  try {
    const { tags } = req.query;
    const url = tags
      ? `http://api.quotable.io/random?tags=${encodeURIComponent(tags)}`
      : "http://api.quotable.io/random"; // ✅ use HTTPS

    const response = await fetch(url, {
      headers: {
        "User-Agent": "MyVercelApp/1.0",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Quotable API returned ${response.status}`);
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
