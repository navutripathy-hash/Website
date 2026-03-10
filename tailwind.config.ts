import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0ea5e9',
          pink: '#ec4899',
          violet: '#8b5cf6'
        }
      }
    }
  },
  plugins: []
};

export default config;
