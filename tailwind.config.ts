import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                accent: "#0F1B3B",
                glass: "#2D3653",
            },
            textColor: {
                accent: "#0F1B3B",
            },
            fontFamily: {
                sedgewick: ["Lobster", "cursive"],
            },
        },
    },
    plugins: [],
} satisfies Config;
