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
        blush: "#FCE7F3",
        rose: "#F5B3C8",
        noir: "#0F090D",
        gold: "#EEC4D7",
        "dusk-veil": "#1A1410",
        "veil-glow": "rgba(255, 235, 215, 0.08)"
      },
      fontFamily: {
        serif: ["Playfair_Display", "var(--font-display)", "serif"],
        sans: ["Space_Grotesk", "var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.3)",
        glow: "0 0 60px rgba(245, 179, 200, 0.38)"
      },
      backdropBlur: {
        glow: "18px"
      },
      borderRadius: {
        'curve-xl': "28px"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 18% 24%, rgba(255, 195, 215, 0.28), transparent 32%), radial-gradient(circle at 76% 12%, rgba(255, 168, 196, 0.2), transparent 30%), linear-gradient(135deg, #0F090D 0%, #150910 48%, #0F090D 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
