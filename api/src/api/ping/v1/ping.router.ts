import { controller } from "./ping.controller";
import express from "express";

const router = express.Router();

router.get("/ping/v1/", controller.healthCheck);

export { router };
