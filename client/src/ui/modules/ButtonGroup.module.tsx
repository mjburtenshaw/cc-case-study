import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography } from "../elements";
import type { ButtonDataProps } from "../elements";

type ButtonGroupModuleProps = {
  buttons: ButtonDataProps[];
  label?: string;
  centered?: boolean;
};

export function ButtonGroup({
  buttons,
  label,
  centered,
}: ButtonGroupModuleProps) {
  return (
    <Grid container sx={{ ...(centered && { justifyContent: "center" }) }}>
      {label && <Typography variant="input-group-label">{label}</Typography>}
      {buttons.map((button, index) => (
        <Button {...button} key={index} />
      ))}
    </Grid>
  );
}
