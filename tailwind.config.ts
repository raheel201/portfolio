// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#697565',
        'brand-secondary': '#ECDFCC',
        'dark-primary': '#181C14',
        'dark-secondary': '#3C3D37',
      },
      animation: {
        'gradient-wave': 'gradient-wave 8s ease infinite',
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-wave': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'subtle-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 10px 0px rgba(105, 117, 101, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 20px 5px rgba(236, 223, 204, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;