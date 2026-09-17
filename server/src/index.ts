import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { healthRouter } from "./routes/health";
import { contactRouter } from "./routes/contact";
import { authRouter } from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || process.env.BACKEND_PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging in development
app.use((req, _res, next) => {
  const start = Date.now();
  next();
  const duration = Date.now() - start;
  console.log(`[${req.method}] ${req.originalUrl} - ${duration}ms`);
});

// API routes
app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter);

// Catch-all for undefined API routes (Express 5 compatible)
app.use("/api", (_req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Global error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

export function startServer(port = PORT) {
  return app.listen(port, () => {
    console.log(`> Leon Tech Backend running on http://localhost:${port}`);
    console.log(`> Health check: http://localhost:${port}/api/health`);
    console.log(`> Contact endpoint: http://localhost:${port}/api/contact`);
  });
}

// Start if executed directly
if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app;
