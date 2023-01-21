import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "6z9yn6",
  e2e: {
    baseUrl: "http://localhost:3000/",
    supportFile: false,
  },
});
