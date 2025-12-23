import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'mobile': '0px',
        'desktop': { 'min': '1024px' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Christmas specific colors
        "christmas-gold": {
          DEFAULT: "hsl(var(--christmas-gold))",
          glow: "hsl(var(--christmas-gold-glow))",
        },
        "christmas-green": "hsl(var(--christmas-green))",
        "christmas-red": "hsl(var(--christmas-red))",
        "christmas-white": "hsl(var(--christmas-white))",
        "christmas-dark-green": "hsl(var(--christmas-dark-green))",
        urgent: {
          DEFAULT: "hsl(var(--urgent))",
          foreground: "hsl(var(--urgent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          bright: "hsl(var(--success-bright))",
        },
        "black-november-gold": "#FFD700",
        "black-november-orange": "#FF4500",
        "vermelho-claro": "#ff6b6b",
        "neo-mint": "#88D8B0", // Adjusted for better visibility
        "purist-blue": "#96CEB4",
        "cassis": "#D9534F", // Adjusted closer to deep pink/reddish
        "cantaloupe": "#FFAD60",
        "mellow-yellow": "#FFEEAD",
        "summer-teal": "#4ECDC4",
        "summer-pink": "#FF6B6B",
        "ocean-strong": "#4FC3F7", // Slightly softer vivid blue matching sky/ocean
        "ocean-light": "#E0F7FA", // Very light, almost white cyan-blue

        // Design System Colors
        "ds-primary": "#1E5A78", // Petroleum Blue (H1)
        "ds-secondary": "#467896", // Grayish Blue (H2/H3)
        "ds-text": "#5A6E7D", // Blueish Gray (P)
        "ds-cta-primary": "#EA580C", // Darker Orange (Primary Button)
        "ds-cta-hover": "#C2410C", // Darker Orange Hover
        "ds-cta-secondary": "#FFD25F", // Warm Yellow (Secondary)
        "ds-surface-white": "#F9FBFC", // Cool White
        "ds-surface-mint": "#6EDFC3", // Soft Neo-Mint
        "ds-surface-pink": "#F3A6B5", // Soft Pink
        "ds-border": "rgba(30,90,120,0.08)", // Border
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-christmas": "var(--gradient-christmas)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-urgent": "var(--gradient-urgent)",
        "gradient-success": "var(--gradient-success)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-festive": "var(--gradient-festive)",
        "gradient-premium": "var(--gradient-premium)",
        "gradient-soft": "var(--gradient-soft)",
        "gradient-summer": "linear-gradient(to right, #88D8B0, #96CEB4, #FFEEAD)",
        "gradient-custom-sky": "linear-gradient(to bottom, rgb(135,206,235), rgb(160,220,245), rgb(185,232,250), rgb(210,240,252), rgb(230,248,255))",
        "gradient-hd-sky": "linear-gradient(to bottom, rgb(135, 206, 235), rgb(145, 212, 240), rgb(156, 218, 244), rgb(166, 224, 247), rgb(177, 230, 250), rgb(187, 235, 252), rgb(198, 240, 253), rgb(208, 244, 254), rgb(219, 247, 255), rgb(230, 248, 255))",
      },
      boxShadow: {
        "christmas": "var(--shadow-christmas)",
        "glow": "var(--shadow-glow)",
        "urgent": "var(--shadow-urgent)",
        "soft": "var(--shadow-soft)",
        "card": "var(--shadow-card)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "christmas-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 20px hsl(var(--christmas-gold) / 0.5)",
            "transform": "scale(1)",
          },
          "50%": {
            "box-shadow": "0 0 40px hsl(var(--christmas-gold) / 0.8)",
            "transform": "scale(1.02)",
          },
        },
        "urgent-flash": {
          "0%, 100%": { "opacity": "1" },
          "50%": { "opacity": "0.7" },
        },
        "countdown-pulse": {
          "0%, 100%": {
            "transform": "scale(1)",
            "color": "hsl(var(--christmas-gold))",
          },
          "50%": {
            "transform": "scale(1.05)",
            "color": "hsl(var(--urgent))",
          },
        },
        "snowfall": {
          "0%": {
            "transform": "translateY(-10vh) translateX(0)",
            "opacity": "1",
          },
          "100%": {
            "transform": "translateY(100vh) translateX(20px)",
            "opacity": "0.3",
          },
        },
        "twinkle": {
          "0%, 100%": { "opacity": "1" },
          "50%": { "opacity": "0.3" },
        },
        "marquee": {
          "0%": { "transform": "translateX(0%)" },
          "100%": { "transform": "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "christmas-pulse": "christmas-pulse 2s ease-in-out infinite",
        "urgent-flash": "urgent-flash 1.5s ease-in-out infinite",
        "countdown-pulse": "countdown-pulse 1s ease-in-out infinite",
        "marquee": "marquee 500s linear infinite",
        "snowfall": "snowfall 10s linear infinite",
        "twinkle": "twinkle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
