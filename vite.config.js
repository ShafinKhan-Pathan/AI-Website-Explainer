import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: "src/embed.tsx",
            name: "AIWebsiteExplainer",
            fileName: function () { return "widget.js"; },
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
            },
        },
    },
});
