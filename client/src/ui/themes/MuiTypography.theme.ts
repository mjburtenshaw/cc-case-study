import { ThemeOptions } from "@mui/material/styles";
import { COLORS, FONTS } from "./theme.constants";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    body2: true;
  }
}

export const muiTypographyOptions: ThemeOptions = {
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            color: COLORS.PURE_ORANGE,
            flexShrink: 0,
            fontFamily: FONTS.ARVO,
            fontSize: "3.25vw",
            fontStyle: "normal",
            fontWeight: 400,
            leadingTrim: "both",
            letterSpacing: "-0.2vw",
            textEdge: "cap",
          },
        },
        {
          props: { variant: "body2" }, // We might want to promote this to override the body2 variant
          style: {
            color: COLORS.DARK_ORANGE,
            fontFamily: FONTS.POPPINS,
            fontWeight: 300,
          },
        },
      ],
    },
  },
};
