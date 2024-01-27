import "dotenv/config";
import cors from "cors";
import express from "express";

function startApi() {
  const { PORT } = process.env;
  const REQUEST_SIZE_LIMIT = "10mb";

  const api = express();

  api.use(express.json({ limit: REQUEST_SIZE_LIMIT }));
  api.use(express.urlencoded({ limit: REQUEST_SIZE_LIMIT, extended: false }));
  api.use(cors());

  // TODO: Add routes

  const httpServer = api.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.info(`✅ API is ready to accept connections at ${url}`);
  });

  return { sammApi: api, httpServer };
}

export const server = {
  startApi,
};
