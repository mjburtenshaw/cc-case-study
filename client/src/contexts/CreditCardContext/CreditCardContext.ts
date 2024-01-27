import { ChangeTextField } from "../../ui";
import { createContext } from "react";
import { noOp, asyncNoOp } from "../../global.utils";

type TCreditCardContext = {
  creditCardNumber: string;
  isWaitingForCreditCard: boolean;
  setCreditCardNumber: ChangeTextField;
  submitCreditCard: typeof asyncNoOp;
};

export const CreditCardContext = createContext<TCreditCardContext>({
  creditCardNumber: "",
  isWaitingForCreditCard: false,
  setCreditCardNumber: noOp,
  submitCreditCard: asyncNoOp,
});
