import { ThemeOptions } from "@mui/material/styles";

export const muiButtonOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "170px",
          flexShrink: 0,
          fontSize: "12px",
          fontWeight: "700",
          height: "40px",
          letterSpacing: "6px",
          width: "272px",
        },
      },
    },
  },
};
