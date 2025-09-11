import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import filesRouter from "./routes/files.js";
import vercelRouter from "./routes/vercel.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json({ limit: "2mb" }));
app.use(morgan("tiny"));

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/files", filesRouter);
app.use("/api/deployments", vercelRouter);

export default serverless(app);
