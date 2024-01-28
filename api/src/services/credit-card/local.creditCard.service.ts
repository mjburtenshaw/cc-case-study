import { CreditCardService } from "./creditCard.types";

export class LocalCreditCardService implements CreditCardService {
  constructor() {
    console.debug(`💳 using local credit card service`);
  }

  /** Our proprietary algorithm for checking credit card numbers */
  isCreditCardNumber(candidate: string): boolean {
    if (!candidate) {
      return false;
    }

    let sum = 0;
    let alternate = false;

    // Reverse the card number and iterate over each digit
    for (let i = candidate.length - 1; i >= 0; i--) {
      let digit = parseInt(candidate[i], 10);

      if (alternate) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      alternate = !alternate;
    }

    // Valid card numbers will produce a sum that is a multiple of 10
    return sum % 10 === 0;
  }
}
