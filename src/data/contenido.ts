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
}

export const servicios: Servicio[] = [
  {
    num: '01',
    nombre: 'Estrategia de comunicación digital',
    descripcion:
      'Diseño el plan de comunicación de tu organización desde cero: qué contar, a quién y en qué canales. También te planteo diferentes propuestas de acciones adaptadas a tu presupuesto y realidad. Porque a veces una mirada externa ayuda a explicar mejor cuáles son tus objetivos como entidad.',
    incluye: [
      'Diagnóstico de la comunicación actual',
      'Propuesta de contenidos y acciones trimestral',
      'Guía de tono y estilo editorial',
      'Formación al equipo (opcional)',
    ],
  },
  {
    num: '02',
    nombre: 'Redacción y comunicación corporativa',
    descripcion:
      'En la era de la Inteligencia Artificial, saber que hay una persona real detrás de la comunicación de tu entidad da mucha confianza a clientes y usuarios.',
    incluye: [
      'Realización de memorias de actividad e informes anuales',
      'Servicio de clipping, redacción de notas y convocatorias de prensa',
      'Contenido para RRSS y blogs',
      'Contenidos para posts y newsletters',
      'Gestión de redes sociales. Calendario editorial mensual',
      'Informe de resultados',
    ],
  },
  {
    num: '03',
    nombre: 'Creación de contenidos',
    descripcion:
      'Creación de contenidos específicos y personalizados. Una forma de contar las historias y humanizar el trabajo que realizas desde tu organización o empresa.',
    incluye: [
      'Entrevistas y reportajes corporativos',
      'Fotografía documental',
      'Producción de material audiovisual (podcasts, vídeo)',
      'Guionización y conducción de podcasts',
      'Distribución en plataformas digitales',
    ],
  },
  {
    num: '04',
    nombre: 'Creatividad',
    descripcion:
      'Porque siempre hay espacio para los momentos creativos en nuestra cotidianeidad. Volver a hacer cosas con las manos, sin prisas. (Re)enfocar la mirada, desconectar de lo digital y (re)aprender a contarnos.',
    incluye: [
      'Organizo talleres y actividades grupales para empresas. Afterwork y teambuilding.',
      'Creación de cuadernos de viaje y journaling.',
      'Fotografía y escritura creativa. Procesos artesanales.',
      'Desarrollo de herramientas y técnicas para trabajar la creatividad.',
    ],
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
    formato: 'Comunicación, estrategia y desarrollo web con un enfoque centrado en las personas.',
    años: '',
    color: 'ochre',
    logo: '',
  },
  {
    nombre: 'Juntos Cambiamos el Mundo',
    url: 'https://juntoscambiamoselmundo.com',
    formato: 'Historias y proyectos de personas que apuestan por el cambio social.',
    años: '2019–2025',
    color: 'sage',
    logo: '',
  },
  {
    nombre: 'Abriendo el Foco',
    url: 'https://achalay.es/abriendoelfoco/',
    formato: 'Podcasts sobre el tercer sector, realizados para Asociación Achalay.',
    años: '2025–2026',
    color: 'ochre',
    logo: '',
  },
  {
    nombre: 'Soplalebeche',
    url: 'https://soplalebeche.com',
    formato: 'Blog de viajes y buenas historias con nombre de viento del sur.',
    años: '2014–2021',
    color: 'sage',
    logo: '',
  },
];

export const bioLarga = `Soy periodista española especializada en desarrollo, migraciones, derechos humanos y medio ambiente, con un enfoque de periodismo de soluciones. Con formación en derecho europeo y RSC, intento aplicar esta experiencia multidisciplinar en todo lo que hago.

He trabajado durante más de diez años en el ámbito social, como técnico y responsable de proyectos y entidades que me han permitido conocer realidades muy complejas y diferentes, viviendo y viajando por numerosos países. Esta dualidad de perfiles y experiencia creo que es un punto a mi favor, ya que me permite contar con los conocimientos y herramientas para explicar qué pasa en el mundo a través de pequeñas historias.

Mis trabajos han sido publicados en El País, Viajes National Geographic, France 24, Altaïr Magazine, Ballena Blanca o Mundo Negro entre otros. He sido galardonada con el LI Premio Ciudad de Alcalá de Periodismo en 2020 y el 2º Premio de Prensa Manos Unidas en 2017.`;

export const bioLargaEN = `I'm a Spanish journalist specialising in development, migration, human rights and the environment, with a focus on solutions journalism. With a background in European law and CSR, I try to bring this multidisciplinary experience to everything I do.

I've worked for more than ten years in the social sector, as a project officer and manager for organisations that have let me get to know very complex and different realities, living and travelling across numerous countries. I believe this dual background works in my favour, as it gives me the knowledge and tools to explain what's happening in the world through small stories.

My work has been published in El País, National Geographic Traveler, France 24, Altaïr Magazine, Ballena Blanca and Mundo Negro, among others. I was awarded the LI Ciudad de Alcalá Journalism Prize in 2020 and the 2nd Manos Unidas Press Prize in 2017.`;

export const bioLargaIT = `Sono una giornalista spagnola specializzata in sviluppo, migrazioni, diritti umani e ambiente, con un approccio di giornalismo delle soluzioni. Con una formazione in diritto europeo e RSI, cerco di applicare questa esperienza multidisciplinare in tutto ciò che faccio.

Ho lavorato per più di dieci anni nell'ambito sociale, come tecnico e responsabile di progetti ed enti che mi hanno permesso di conoscere realtà molto complesse e diverse, vivendo e viaggiando in numerosi paesi. Credo che questa dualità di profili ed esperienza sia un punto a mio favore, perché mi permette di avere le conoscenze e gli strumenti per spiegare cosa succede nel mondo attraverso piccole storie.

I miei lavori sono stati pubblicati su El País, Viajes National Geographic, France 24, Altaïr Magazine, Ballena Blanca e Mundo Negro, tra gli altri. Ho ricevuto il LI Premio Ciudad de Alcalá di Giornalismo nel 2020 e il 2° Premio Stampa Manos Unidas nel 2017.`;

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
