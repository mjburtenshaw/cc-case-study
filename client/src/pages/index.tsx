import { CreditCardContextProvider } from "../contexts";
import { CreditCardPage } from "./CreditCard.page";
import { SplatPage } from "./Splat.page";

const Pages = {
  CreditCardPage: () => (
    <CreditCardContextProvider>
      <CreditCardPage />
    </CreditCardContextProvider>
  ),
  SplatPage,
};

export { Pages };
