import { services } from "../../../services";
import { StatusCodes } from "http-status-codes";
import express from "express";

const validate: express.Handler = (req, res) => {
  const { creditCardNumber } = req.body;

  if (!creditCardNumber) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "creditCardNumber is missing from body" });
  }

  const isCreditCardNumber =
    services.creditCard.isCreditCardNumber(creditCardNumber);

  res.status(StatusCodes.OK).json({ isCreditCardNumber });
};

export const controller = { validate };
