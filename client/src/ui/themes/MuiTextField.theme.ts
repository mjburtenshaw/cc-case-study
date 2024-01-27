import { COLORS } from "./theme.constants";
import { ThemeOptions } from "@mui/material/styles";

export const muiTextFieldOptions: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderColor: COLORS.VERY_DARK_DESATURATED_BLUE,
            borderRadius: "8px",
            borderStyle: "solid",
            borderWidth: "1px",
            height: ownerState.multiline ? "fit-content" : "48px",
            "&.Mui-focused": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-disabled": {
              borderColor: COLORS.GRAYISH_BLUE,
            },
            "& fieldset": {
              border: "none",
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              "&::placeholder": {
                color: COLORS.DARK_GRAYISH_BLUE,
                opacity: 1,
              },
              '&[aria-invalid="true"]': {
                "&::placeholder": {
                  color: COLORS.MUI_ERROR_RED,
                  opacity: 1,
                },
              },
            },
          },
        }),
      },
    },
  },
};
