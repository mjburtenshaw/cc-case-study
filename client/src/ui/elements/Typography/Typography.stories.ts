import type { Meta } from "@storybook/react";
import { Typography } from "./Typography.styled";
import { TypographyMocks } from "./Typography.mocks";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
  args: {
    children: "Sphinx of black quartz, judge my vow.",
  },
};

export default meta;

export const Default = TypographyMocks.default;
