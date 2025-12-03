import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F6E8E0",
        rose: "#E7C7B4",
        noir: "#0F0C0A",
        gold: "#D6B37F",
        "dusk-veil": "#1A1410",
        "veil-glow": "rgba(255, 235, 215, 0.08)"
      },
      fontFamily: {
        serif: ["Playfair_Display", "var(--font-display)", "serif"],
        sans: ["Space_Grotesk", "var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.25)",
        glow: "0 0 50px rgba(214, 179, 127, 0.35)"
      },
      backdropBlur: {
        glow: "18px"
      },
      borderRadius: {
        'curve-xl': "28px"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(214, 179, 127, 0.18), transparent 28%), radial-gradient(circle at 80% 30%, rgba(231, 199, 180, 0.18), transparent 26%), linear-gradient(135deg, #0F0C0A 0%, #1A1410 50%, #0F0C0A 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
