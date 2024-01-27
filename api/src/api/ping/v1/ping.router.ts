import { controller } from "./ping.ctrl";
import express from "express";

const router = express.Router();

router.get("/ping/v1/", controller.healthCheck);

export { router };
