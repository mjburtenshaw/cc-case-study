import { CreditCardService } from "./creditCard.types";
import { LocalCreditCardService } from "./local.creditCard.service";
import { ValidatorCreditCardService } from "./validator.creditCard.service";

/** Let's pretend there's a premium product we want to use, but it costs money, so we want to save it for production. */
const creditCardServices: Record<string, any> = {
  production: ValidatorCreditCardService,
  test: LocalCreditCardService,
  local: LocalCreditCardService,
};

export class CreditCardProxy implements CreditCardService {
  private _creditCardService: LocalCreditCardService | null = null;
  private _notReadyMessage =
    "💣 credit card service isn't ready. Check if init() is called";

  public init() {
    const { NODE_ENV } = process.env;
    if (!NODE_ENV) {
      console.warn(`🚨 NODE_ENV is not set`);
    }

    const creditCardService =
      creditCardServices[NODE_ENV as string] || creditCardServices.local;

    this._creditCardService = new creditCardService();
  }

  public isCreditCardNumber(candidate: string) {
    if (!this._creditCardService) {
      throw new Error(this._notReadyMessage);
    }

    return this._creditCardService.isCreditCardNumber(candidate);
  }
}

export const creditCardProxy = new CreditCardProxy();
