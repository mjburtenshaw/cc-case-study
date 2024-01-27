import { server } from "./server";

const REQUEST_SIZE_LIMIT = "10mb";

server.startApi(REQUEST_SIZE_LIMIT);
