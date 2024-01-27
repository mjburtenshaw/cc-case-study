import axios from "axios";
const { VITE_API_HOST } = import.meta.env;

type FormData = {
  creditCardNumber: string;
};

export async function validateCreditCardNumber(
  formData: FormData
): Promise<boolean> {
  const response = await axios.post(
    `${VITE_API_HOST}/credit-card/v1/validate`,
    formData
  );

  const { isCreditCardNumber } = response.data;

  return isCreditCardNumber;
}
