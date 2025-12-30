import express from "express";
import cors from "cors";
import helmet from "helmet";

import todoRoutes from "./routes/todo.routes.js";
import healthRoutes from "./routes/health.routes.js";
import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "16kb" }));

app.use("/api/health", healthRoutes);
app.use("/api/todos", todoRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
