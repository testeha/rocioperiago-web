import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sea: {
          DEFAULT: '#0f1c1e', // fondo principal — casi negro, mayor contraste
          2: '#1c3236',       // paneles/tarjetas sobre fondo oscuro
          3: '#28454a',       // hover / bordes sutiles
        },
        sand: {
          DEFAULT: '#f3eee3', // tarjetas claras
          dim: '#e6dfcd',     // fondos secundarios claros
        },
        ochre: {
          DEFAULT: '#cf9a34', // mostaza — premios, CTA editores, acentos
          light: '#e3b458',
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
