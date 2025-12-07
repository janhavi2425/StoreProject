import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import storeRoutes from "./routes/stores.js";
import ratingRoutes from "./routes/ratings.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:0000" })); //change to needed host

app.use("/auth", authRoutes);
app.use("/stores", storeRoutes);
app.use("/ratings", ratingRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
