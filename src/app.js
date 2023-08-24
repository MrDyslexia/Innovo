import express from "express";
import indexRoutes from "./routes/index.routes";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api",authRoutes);
export default app;
