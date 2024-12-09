import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            name: "verification-code-input",
            formats: ["es", "umd"],
            fileName: (format) => `verification-code-input.${format}.js`,
        },
    },
});
