export interface CreditCardService {
  isCreditCardNumber: (candidate: string) => boolean;
}
