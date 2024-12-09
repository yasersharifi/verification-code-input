import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            name: "verification-code-input",
            fileName: (format) => `name.${format}.js`,
        },
    },
});
