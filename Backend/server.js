import express from "express";
import cors from "cors";
import restaurants from "./routes/restaurants.js";

const PORT = 8000;

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// Routes
// app.use("/api/restaurants", restaurants);
app.use("/api", restaurants);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
