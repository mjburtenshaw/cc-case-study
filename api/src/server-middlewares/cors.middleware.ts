import cors from "cors";
import type { Express } from "express";

export function useCors(expressApp: Express) {
  expressApp.use(cors());
}
