import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sea: {
          DEFAULT: '#1b3a3f', // fondo principal, dominante
          2: '#234a50',       // paneles/tarjetas sobre fondo oscuro
          3: '#2c5a61',       // hover / bordes sutiles
        },
        sand: {
          DEFAULT: '#f3eee3', // tarjetas claras
          dim: '#e6dfcd',     // fondos secundarios claros
        },
        ochre: {
          DEFAULT: '#b8862f', // acento cálido — premios, CTA editores, ruta
          light: '#d4a655',
        },
        sage: {
          DEFAULT: '#7fa89e', // acento frío — CTA organizaciones
          light: '#a8c4bc',
        },
        ink: {
          DEFAULT: '#152a2e', // texto sobre sand
        },
        cream: '#f7f4ec',    // texto sobre sea
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1080px',
      },
    },
  },
  plugins: [typography],
};
