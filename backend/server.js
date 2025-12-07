import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import storeRoutes from "./routes/stores.js";
import ratingRoutes from "./routes/ratings.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Only one CORS configuration
app.use(cors({ origin: "http://localhost:5173" })); // frontend port

// Routes
app.use("/auth", authRoutes);
app.use("/stores", storeRoutes);
app.use("/ratings", ratingRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
