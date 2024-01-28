import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  rootDir: ".",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.*"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
};

export default config;
