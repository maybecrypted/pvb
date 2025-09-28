export default async function handler(req, res) {
  try {
    const url = `https://plantsvsbrainrot.com/api/seed-shop.php?ts=${Date.now()}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "External API failed" });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Seed shop API error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
