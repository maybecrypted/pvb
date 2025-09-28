export default async function handler(req, res) {
  try {
    // Fetch data from the actual external API
    const url = `https://plantsvsbrainrot.com/api/seed-shop.php?ts=${Date.now()}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`);
    }
    const data = await response.json(); // Expect JSON from external API
    res.status(200).json(data);         // Return JSON to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch seed shop data" });
  }
}
