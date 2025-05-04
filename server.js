import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
