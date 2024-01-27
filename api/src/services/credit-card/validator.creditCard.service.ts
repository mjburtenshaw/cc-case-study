import validator from "validator";
import { CreditCardService } from "./creditCard.types";

export class ValidatorCreditCardService implements CreditCardService {
  constructor() {
    console.debug(`💳 using validator credit card service`);
  }

  isCreditCardNumber(candidate: string): boolean {
    return validator.isCreditCard(candidate);
  }
}
