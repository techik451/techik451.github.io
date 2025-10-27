import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        igf: {
          blue: '#0C233F',
          gold: '#F4B400',
          cream: '#F7F3ED',
          slate: '#11263C'
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
