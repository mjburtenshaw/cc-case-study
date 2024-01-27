import { StoryObj } from "@storybook/react";
import { TextField } from "./TextField.styled";

type Story = StoryObj<typeof TextField>;

export const TextFieldMocks: {
  [key: string]: Story;
} = {
  default: {},
};
