import express from "express";
import type { Express } from "express";

export function useBodyParser(expressApp: Express, requestSizeLimit: string) {
  expressApp.use(express.json({ limit: requestSizeLimit }));
  expressApp.use(
    express.urlencoded({ limit: requestSizeLimit, extended: false })
  );
}
