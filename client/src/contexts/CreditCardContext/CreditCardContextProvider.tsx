import { CreditCardContext } from "./CreditCardContext";
import { creditCardService } from "../../services";
import { useService, useSnackbar } from "../../hooks";
import { useTextField } from "../../ui";

const service = creditCardService.validateCreditCardNumber;

type CreditCardContextProviderProps = {
  children: JSX.Element;
};

export function CreditCardContextProvider({
  children,
}: CreditCardContextProviderProps) {
  const { notify } = useSnackbar();

  const { value: creditCardNumber, handleChange: setCreditCardNumber } =
    useTextField();

  const messages = {
    failure: `Credit card number couldn't be validated.`,
    success: "Credit card number validated!",
    invalid: !creditCardNumber
      ? "Please fill out required inputs."
      : "Credit card number couldn't be validated.",
  };

  const { call: callCreditCardService, isWaiting: isWaitingForCreditCard } =
    useService(service, messages, { notifyOnSuccess: false });

  const submitCreditCard = async () => {
    const formData = { creditCardNumber };
    const isCreditCardNumber = await callCreditCardService(formData);
    const message = isCreditCardNumber
      ? "Credit card number is valid!"
      : "Credit card number is invalid.";
    const variant = isCreditCardNumber ? "success" : "error";
    notify(message, { variant });
  };

  return (
    <CreditCardContext.Provider
      value={{
        creditCardNumber,
        isWaitingForCreditCard,
        setCreditCardNumber,
        submitCreditCard,
      }}
    >
      {children}
    </CreditCardContext.Provider>
  );
}
