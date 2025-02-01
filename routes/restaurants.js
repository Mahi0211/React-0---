import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the restaurants.json file
const dataPath = path.join(__dirname, "..", "data", "restaurants.json");

// GET /api/restaurants
router.get("/", async (req, res) => {
  console.log("Request received at /api/restaurants"); // Debugging line
  try {
    console.log("Reading data from:", dataPath); // Debugging line
    const data = await fs.promises.readFile(dataPath, "utf8");
    console.log("Data read successfully:", data); // Debugging line

    const restaurants = JSON.parse(data);
    console.log("Restaurants data:", restaurants); // Debugging line

    res.json(restaurants);
  } catch (err) {
    console.error("Error reading or parsing data:", err); // Debugging line
    if (err.code === "ENOENT") {
      res.status(404).json({ error: "Restaurant data not found" });
    } else if (err instanceof SyntaxError) {
      res.status(500).json({ error: "Invalid JSON format in data file" });
    } else {
      res.status(500).json({ error: "Failed to fetch restaurant data" });
    }
  }
});

export default router;
