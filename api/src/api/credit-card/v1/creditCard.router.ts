import { controller } from "./creditCard.ctrl";
import express from "express";

const router = express.Router();

router.post("/credit-card/v1/validate", controller.validate);

export { router };
