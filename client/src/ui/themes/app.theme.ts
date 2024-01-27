import { COLORS, FONTS } from "./theme.constants";
import { muiButtonOptions } from "./MuiButton.theme";
import { muiTextFieldOptions } from "./MuiTextField.theme";
import { muiTypographyOptions } from "./MuiTypography.theme";
import { ThemeOptions, createTheme } from "@mui/material/styles";

export const sharedThemeOptions: ThemeOptions = {
  components: {
    ...muiButtonOptions.components,
    ...muiTextFieldOptions.components,
    ...muiTypographyOptions.components,
  },
  palette: {
    primary: {
      main: COLORS.PURE_ORANGE,
      contrastText: "white",
    },
    secondary: {
      main: COLORS.DARK_GRAY,
    },
  },
  typography: {
    fontFamily: FONTS.POPPINS,
    h2: {
      color: "white",
      fontSize: "2.5vw",
      fontWeight: 500,
    },
  },
};

const lightThemeOptions: ThemeOptions = {};

const darkThemeOptions: ThemeOptions = {
  palette: {
    ...sharedThemeOptions.palette,
    mode: "dark",
  },
};

export const lightTheme = createTheme({
  ...sharedThemeOptions,
  ...lightThemeOptions,
});

export const darkTheme = createTheme({
  ...sharedThemeOptions,
  ...darkThemeOptions,
});
