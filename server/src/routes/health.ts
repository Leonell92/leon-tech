import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Leon Tech API (Bridgeway Technologies)",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
