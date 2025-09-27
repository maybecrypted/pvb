export default async function handler(req, res) {
  try {
    const url = `https://plantsvsbrainrot.com/api/seed-shop.php?ts=${Date.now()}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch seed shop data" });
  }
}
