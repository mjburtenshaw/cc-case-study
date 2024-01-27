import { StatusCodes } from "http-status-codes";
import express from "express";

const healthCheck: express.Handler = (_, res) => {
  console.info(`📡 The API is live`);
  res.sendStatus(StatusCodes.OK);
};

export const controller = { healthCheck };
