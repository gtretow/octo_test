export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
