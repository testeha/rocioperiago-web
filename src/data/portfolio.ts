// Portfolio de proyectos con ONGs, fundaciones y empresas.
// Cada proyecto tiene su propia "ficha" en /servicios/[slug].
// Los campos marcados "Contenido pendiente" están a la espera de que Rocío confirme los detalles.

export type CategoriaProyecto = 'estrategia' | 'contenidos' | 'podcast' | 'redaccion' | 'rrss' | 'creatividad';

export const categoriasProyecto: Record<CategoriaProyecto, string> = {
  estrategia: 'Estrategia',
  contenidos: 'Contenidos',
  podcast: 'Podcast y audiovisual',
  redaccion: 'Redacción',
  rrss: 'Redes sociales',
  creatividad: 'Creatividad',
};

export interface ProyectoCliente {
  slug: string;
  categoria: CategoriaProyecto;
  categoriaLabel: string; // eyebrow mostrado en la ficha, más descriptivo que la categoría de filtro
  titulo: string;
  cliente: string;
  año: string;
  ubicacion: string;
  tags: string[];
  imagenPortada: string;
  resumenCard: string;
  subtitulo: string;
  cuerpoTitulo: string;
  cuerpoParrafos: string[];
  elProyecto: string;
  miTrabajo: string[];
  resultado: string;
  cta?: { texto: string; url: string };
  galeria?: string[];
  cita?: { texto: string; autor: string };
  pendiente?: boolean; // true = ficha con contenido de ejemplo, a la espera de los datos reales
}

export const proyectosCliente: ProyectoCliente[] = [
  {
    slug: 'abriendo-el-foco',
    categoria: 'podcast',
    categoriaLabel: 'Podcast y audiovisual',
    titulo: 'Abriendo el Foco',
    cliente: 'Achalay',
    año: '2025 – 2026',
    ubicacion: 'España',
    tags: ['Podcast', 'Tercer sector', 'Comunicación'],
    imagenPortada: '/images/servicios/abriendo-el-foco-hero.webp',
    resumenCard:
      'Producción y desarrollo de un podcast sobre el tercer sector. Guion, entrevistas, edición y estrategia de difusión para dar voz a quienes generan cambio.',
    subtitulo: 'Un podcast para dar voz a las personas y proyectos que están transformando el tercer sector.',
    cuerpoTitulo: 'Una mirada al tercer sector',
    cuerpoParrafos: [
      'Abriendo el Foco nace con la intención de dar visibilidad al trabajo de organizaciones, profesionales y personas que, desde distintos ámbitos, contribuyen a construir una sociedad más humana y sostenible.',
      'A través de entrevistas en profundidad, el podcast explora los retos, aprendizajes y logros de iniciativas que generan un impacto real en la vida de muchas personas.',
      'Cada episodio es una invitación a mirar más allá, a conocer otras realidades y a descubrir cómo, cuando se pone el foco en las personas, surgen historias que inspiran.',
    ],
    elProyecto:
      'Abriendo el Foco es un podcast que visibiliza iniciativas, personas y organizaciones que trabajan por una sociedad más justa, inclusiva y solidaria.',
    miTrabajo: [
      'Conceptualización y desarrollo del formato',
      'Guion y preparación de entrevistas',
      'Coordinación de grabaciones',
      'Edición y postproducción',
      'Estrategia de difusión',
      'Acompañamiento en la comunicación',
    ],
    resultado:
      'Una serie de conversaciones cercanas y profundas que conectan con la realidad del tercer sector y acercan al público historias de impacto positivo.',
    cta: { texto: 'Escuchar el podcast', url: 'https://achalay.es/abriendoelfoco/' },
    cita: {
      texto: 'Escuchar estas historias me recuerda por qué vale la pena contar lo que otros hacen.',
      autor: 'Rocío Periago',
    },
  },
  {
    slug: 'agencia-bis',
    categoria: 'estrategia',
    categoriaLabel: 'Estrategia y contenidos',
    titulo: 'Estrategia y contenidos digitales',
    cliente: 'Agencia Bis',
    año: 'Contenido pendiente',
    ubicacion: 'Contenido pendiente',
    tags: ['Estrategia', 'Contenidos', 'RRSS'],
    imagenPortada: '',
    resumenCard: 'Estrategia de contenidos y redacción para Agencia Bis.',
    subtitulo: 'Contenido pendiente de confirmar con Rocío.',
    cuerpoTitulo: 'Contenido pendiente',
    cuerpoParrafos: ['Esta ficha está a la espera de los detalles definitivos del proyecto.'],
    elProyecto: 'Contenido pendiente.',
    miTrabajo: ['Contenido pendiente'],
    resultado: 'Contenido pendiente.',
    pendiente: true,
  },
  {
    slug: 'juntos-cambiamos-el-mundo',
    categoria: 'podcast',
    categoriaLabel: 'Podcast y producción',
    titulo: 'Serie de podcasts de impacto social',
    cliente: 'Juntos Cambiamos el Mundo',
    año: '2019 – 2025',
    ubicacion: 'Contenido pendiente',
    tags: ['Podcast', 'Producción', 'Impacto social'],
    imagenPortada: '',
    resumenCard: 'Producción de una serie de podcasts de impacto social para Juntos Cambiamos el Mundo.',
    subtitulo: 'Contenido pendiente de confirmar con Rocío.',
    cuerpoTitulo: 'Contenido pendiente',
    cuerpoParrafos: ['Esta ficha está a la espera de los detalles definitivos del proyecto.'],
    elProyecto: 'Contenido pendiente.',
    miTrabajo: ['Contenido pendiente'],
    resultado: 'Contenido pendiente.',
    pendiente: true,
  },
];
