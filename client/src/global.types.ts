import { THEMES } from "./ui";

export type NoInfer<T> = [T][T extends unknown ? 0 : never];

export type ThemeKey = keyof typeof THEMES;

export type Theme = (typeof THEMES)[ThemeKey];
