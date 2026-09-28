// Organizaciones que han confiado en el trabajo de Rocío (retícula de logos de la Home).
//
// · `logo`  → ruta a un PNG/SVG con fondo transparente en /public. Si falta, se muestra el nombre en texto (provisional).
// · `ancho` / `alto` → caja máxima en px para equilibrar ópticamente logos de formatos muy distintos
//   (por defecto 160 × 60). El logo se escala dentro de la caja conservando su proporción.
// · Todos los logos se pintan en blanco por CSS, así que sirve cualquier versión (a color o en negativo).

export interface Organizacion {
  nombre: string;
  logo?: string;
  ancho?: number;
  alto?: number;
}

export const organizaciones: Organizacion[] = [
  { nombre: 'Ayuntamiento de Lorca', logo: '/images/logos/ayuntamiento-lorca.png', alto: 76 },
  { nombre: 'Achalay', logo: '/images/logos/achalay.png', ancho: 150, alto: 76 },
  { nombre: 'IE University', logo: '/images/logos/ie-university.svg', alto: 72 },
  { nombre: 'Aplica', logo: '/images/logos/aplica.png', ancho: 130 },
  { nombre: 'Cooperama', logo: '/images/logos/cooperama.png' },

  { nombre: "Sant'Egidio", logo: '/images/logos/sant-egidio.png', alto: 88 },
  { nombre: 'Asociación Síndrome de Malan España', logo: '/images/logos/malan.png', alto: 62 },
  { nombre: 'Avant Integración Social', logo: '/images/logos/avant.svg', alto: 76 },
  { nombre: 'EcoMurcia', logo: '/images/logos/ecomurcia.png', alto: 80 },
  { nombre: 'Fundación Ángel Linares', logo: '/images/logos/fundacion-angel-linares.png', alto: 70 },

  { nombre: 'Mundo Creati', logo: '/images/logos/mundo-creati.png' },
  { nombre: '50 en camino', logo: '/images/logos/50-en-camino.png', alto: 72 },
  { nombre: 'Hope Emeka', logo: '/images/logos/hope-emeka.png', ancho: 164 },
  { nombre: 'JJR Safe Trading', logo: '/images/logos/jjr-safe-trading.png', alto: 76 },
  { nombre: 'Onda Regional', logo: '/images/logos/onda-regional.png', ancho: 150 },
];
