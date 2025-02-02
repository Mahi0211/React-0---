import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "..", "data", "restaurants.json");
const filePath = path.join(__dirname, "..", "data", "menu.json");

router.get("/restaurants", async (req, res) => {
  try {
    const data = await fs.promises.readFile(dataPath, "utf8");

    const restaurants = JSON.parse(data);

    res.json(restaurants);
  } catch (err) {
    if (err.code === "ENOENT") {
      res.status(404).json({ error: "Restaurant data not found" });
    } else if (err instanceof SyntaxError) {
      res.status(500).json({ error: "Invalid JSON format in data file" });
    } else {
      res.status(500).json({ error: "Failed to fetch restaurant data" });
    }
  }
});

router.get("/menu/:id", async (req, res) => {
  try {
    const menus = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
    const resId = req.params.id;

    if (!menus[resId]) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(menus[resId]);
  } catch (err) {
    if (err.code === "ENOENT") {
      res.status(404).json({ error: "Menu data not found" });
    } else if (err instanceof SyntaxError) {
      res.status(500).json({ error: "Invalid JSON format in data file" });
    } else {
      res.status(500).json({ error: "Failed to fetch restaurant data" });
    }
  }
});

export default router;
