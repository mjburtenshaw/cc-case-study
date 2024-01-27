import { ButtonGroup, TextFieldGroup, TypographyGroup } from "../ui";
import { CreditCardContext } from "../contexts";
import { CreditCardTemplate } from "../templates";
import { useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export function CreditCardPage() {
  const {
    creditCardNumber,
    isWaitingForCreditCard,
    setCreditCardNumber,
    submitCreditCard,
  } = useContext(CreditCardContext);

  return (
    <CreditCardTemplate.Page>
      <Grid>
        <TypographyGroup
          centered={true}
          typographies={[
            {
              children: "Credit Card Validator",
              variant: "h1",
            },
            {
              children:
                "Type in a number, and we'll tell you if it's a valid credit card number.",
              variant: "body1",
            },
            {
              children: "We won't save it, promise.",
              variant: "body2",
              smallFont: true,
            },
          ]}
        />
      </Grid>
      <Grid>
        <TextFieldGroup
          textFields={[
            {
              handleChange: setCreditCardNumber,
              name: "creditCardNumber",
              placeholder: "Credit Card Number",
              value: creditCardNumber,
            },
          ]}
        />
      </Grid>
      <Grid>
        <ButtonGroup
          buttons={[
            {
              children: "SUBMIT",
              disabled: isWaitingForCreditCard,
              onClick: submitCreditCard,
              variant: "contained",
            },
          ]}
        />
      </Grid>
    </CreditCardTemplate.Page>
  );
}
