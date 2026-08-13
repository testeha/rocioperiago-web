export interface Investigacion {
  slug: string;
  titulo: string;
  financiacion: string;
  ref: string;
  cantidad: string;
  año: string;
  paises: string[];
  medios: string;
  idiomas: string;
  resumen: string;
}

export const investigaciones: Investigacion[] = [
  {
    slug: 'ruta-carbon',
    titulo: 'El polvillo que contamina el mundo: la ruta del carbón Colombia–Alemania',
    financiacion: 'Journalismfund Europe',
    ref: 'ENV1/2023/214',
    cantidad: '€22.600',
    año: '2023',
    paises: ['Colombia', 'Alemania'],
    medios: 'Público, Espacio Angular, Brecha, Revista Late (5 medios)',
    idiomas: 'Español · Inglés',
    resumen:
      'El impacto humano, social y ambiental del carbón extraído en La Guajira colombiana y consumido en centrales alemanas. Investigación transfronteriza sobre cadenas de suministro, comunidades afectadas y transición energética.',
  },
  {
    slug: 'filtros-solares',
    titulo: 'The not-so-sunny side of sunscreen',
    financiacion: 'Journalismfund Europe',
    ref: 'CBL/2024/PLUPRO/104',
    cantidad: '€12.500',
    año: '2024–2025',
    paises: ['España', 'Italia', 'Grecia'],
    medios: 'France 24, Revista Late, Revolve Media y medios de 4 países (6 medios)',
    idiomas: 'Español · Inglés · Italiano',
    resumen:
      'Los filtros solares contaminan el Mediterráneo. Investigación con análisis científico de muestras de agua, entrevistas a investigadores y activistas en tres países, y cobertura en medios internacionales.',
  },
];

export interface Servicio {
  num: string;
  nombre: string;
  descripcion: string;
  incluye: string[];
  precio: string;
  destacado?: boolean;
}

export const servicios: Servicio[] = [
  {
    num: '01',
    nombre: 'Estrategia de comunicación digital',
    descripcion:
      'Diseño el plan de comunicación de tu organización desde cero: qué contar, a quién, en qué canales y con qué tono.',
    incluye: [
      'Diagnóstico de comunicación actual',
      'Plan de contenidos trimestral',
      'Guía de tono y estilo editorial',
      'Formación al equipo si se necesita',
    ],
    precio: 'Desde 1.200€',
    destacado: true,
  },
  {
    num: '02',
    nombre: 'Redacción y contenidos',
    descripcion:
      'Reportajes, memorias de actividad, notas de prensa, posts para RRSS o newsletter. Textos que suenan humanos y que se leen.',
    incluye: [
      'Reportajes e historias de impacto',
      'Memorias e informes anuales',
      'Contenido para RRSS y blog',
      'Comunicados y notas de prensa',
    ],
    precio: 'Por pieza o retainer',
  },
  {
    num: '03',
    nombre: 'Podcast institucional',
    descripcion:
      'Guion, producción y conducción de podcasts para organizaciones sociales. Con experiencia real en Achalay y Juntos Cambiamos el Mundo.',
    incluye: [
      'Definición de formato y audiencia',
      'Guion de episodios',
      'Conducción y entrevistas',
      'Distribución en plataformas',
    ],
    precio: 'Por temporada',
  },
  {
    num: '04',
    nombre: 'Gestión de redes sociales',
    descripcion:
      'Comunidades pequeñas con voz propia. Gestión mensual de Instagram o LinkedIn para organizaciones que quieren presencia sin ruido.',
    incluye: [
      'Calendario editorial mensual',
      'Redacción y publicación',
      'Informe mensual de resultados',
    ],
    precio: 'Desde 400€/mes',
  },
];

export const procesoServicio = [
  { num: '01', nombre: 'Escucha', desc: 'Entiendo tu organización y misión antes de proponer nada.' },
  { num: '02', nombre: 'Propuesta', desc: 'Propuesta concreta con alcance y precio cerrado. Sin sorpresas.' },
  { num: '03', nombre: 'Producción', desc: 'Plazos claros e iteraciones. En contacto directo contigo.' },
  { num: '04', nombre: 'Entrega', desc: 'Revisiones incluidas hasta que el resultado sea el que necesitas.' },
];

export interface Cliente {
  org: string;
  titulo: string;
  tags: string[];
}

export const clientes: Cliente[] = [
  {
    org: 'Achalay',
    titulo: 'Podcast «Abriendo el Foco» y comunicación digital',
    tags: ['Podcast', 'Tercer sector', 'Guion', 'Locución'],
  },
  {
    org: 'Agencia Bis',
    titulo: 'Estrategia de contenidos y redacción',
    tags: ['Estrategia', 'Contenidos', 'RRSS'],
  },
  {
    org: 'Juntos Cambiamos el Mundo',
    titulo: 'Producción de serie de podcasts de impacto social',
    tags: ['Podcast', 'Producción', 'Impacto social'],
  },
];

export interface Premio {
  año: string;
  nombre: string;
  sub: string;
  icono: 'medalla' | 'expediente';
}

export const premios: Premio[] = [
  {
    año: '2020',
    nombre: 'Premio Ciudad de Alcalá',
    sub: '«La biblioteca de las mujeres de Estambul» · Altaïr Magazine',
    icono: 'medalla',
  },
  {
    año: '2017',
    nombre: 'Premio Prensa Manos Unidas',
    sub: '«De las calles de Recife a los fogones» · El País',
    icono: 'medalla',
  },
  {
    año: '2023–2025',
    nombre: 'Journalismfund Europe',
    sub: '2 investigaciones financiadas · €35.100',
    icono: 'expediente',
  },
];

export const proyectosPropios = [
  {
    nombre: 'Testeha Estudio',
    url: '',
    formato: 'Estudio de comunicación · Codirectora',
    años: '',
  },
  {
    nombre: 'Juntos Cambiamos el Mundo',
    url: 'https://juntoscambiamoselmundo.com',
    formato: 'Podcast de impacto social',
    años: '2019–2025',
  },
  {
    nombre: 'Abriendo el Foco',
    url: 'https://open.spotify.com/show/5wPNHi6kYZxniKMRBTlJhE',
    formato: 'Podcast Achalay',
    años: '2025',
  },
  {
    nombre: 'Soplalebeche',
    url: 'https://soplalebeche.com',
    formato: 'Blog de viajes y narrativa',
    años: '2015–2021',
  },
];

export const bioLarga = `Soy periodista española especializada en desarrollo, migración y medio ambiente, con un enfoque en periodismo de soluciones y perspectiva de derechos humanos.

He trabajado durante más de diez años en el ámbito social, he vivido en otros países y conocido realidades y culturas muy diferentes. He viajado dejándome prejuicios y estereotipos por el camino. Eso es lo que traigo a cada proyecto: curiosidad, rigor y el factor humano siempre en el centro.

Mis trabajos han sido publicados en El País, National Geographic, France 24, Altaïr Magazine, Ballena Blanca, Mundo Negro y Journalismfund Europe, entre otros. He sido galardonada con el Premio de Periodismo Ciudad de Alcalá 2020 y el Premio Prensa Manos Unidas 2017. También ayudo a empresas y ONGs a diseñar su estrategia de comunicación digital.`;

export const formacion = [
  { titulo: 'Máster en Derecho Constitucional Europeo', sub: 'Univ. de Granada · Políticas Migratorias UE · Investigación en Colombia', años: '2010–2011' },
  { titulo: 'Máster en Responsabilidad Social Corporativa', sub: 'Universidad de Murcia', años: '2012–2013' },
  { titulo: 'Licenciada en Derecho', sub: 'Universidad de Murcia · Erasmus en Reggio Calabria (Italia)', años: '2004–2009' },
  { titulo: 'Fotografía avanzada', sub: 'PICA Escuela Internacional PhotoEspaña, Madrid', años: '2016–2020' },
  { titulo: 'Estudios Africanos (90h)', sub: 'Universidad de Valladolid (online)', años: '2021' },
];

export const idiomas = [
  { idioma: 'Español', nivel: 100 },
  { idioma: 'Italiano', nivel: 70 },
  { idioma: 'Inglés C1', nivel: 80 },
  { idioma: 'Portugués', nivel: 40 },
  { idioma: 'Francés', nivel: 25 },
];
