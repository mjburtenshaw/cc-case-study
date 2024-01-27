import { creditCard, ping } from "../api";
import type { Express } from "express";

export function useRouters(expressApp: Express) {
  expressApp.use(creditCard.v1.router);
  expressApp.use(ping.v1.router);
}
