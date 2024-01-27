import "dotenv/config";
import { serverMiddlewares } from "./server-middlewares";
import express from "express";

function startApi(requestSizeLimit: string) {
  const { PORT } = process.env;

  const api = express();

  serverMiddlewares.useBodyParser(api, requestSizeLimit);
  serverMiddlewares.useCors(api);
  serverMiddlewares.useRouters(api);

  const httpServer = api.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.info(`✅ the API is ready to accept connections at ${url}`);
  });

  return { api, httpServer };
}

export const server = {
  startApi,
};
