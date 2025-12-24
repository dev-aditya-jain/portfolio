import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve attached_assets directory for resume download
  app.use("/attached_assets", express.static(path.resolve(process.cwd(), "attached_assets")));

  return httpServer;
}
