export type Tema = 'ambiente' | 'migracion' | 'social' | 'viajes' | 'rsc';

export interface Trabajo {
  titulo: string;
  medio: string;
  tema: Tema;
  temaLabel: string;
  año: string;
  url: string;
  destacado?: 'Investigación' | 'Premio';
  extracto?: string;
  imagen?: string;
}

export const temas: Record<Tema, { label: string; color: string }> = {
  ambiente: { label: 'Medio ambiente', color: 'sage' },
  migracion: { label: 'Migración', color: 'ochre' },
  social: { label: 'Justicia social', color: 'sand' },
  viajes: { label: 'Viajes', color: 'sage' },
  rsc: { label: 'RSC', color: 'ochre' },
};

export const trabajos: Trabajo[] = [
  {
    titulo: 'La biblioteca de barrio que lleva 20 años construyendo convivencia en Cartagena',
    medio: 'Revista Haz',
    tema: 'social',
    temaLabel: 'Periodismo de soluciones',
    año: '2026',
    url: 'https://hazrevista.org/soluciones/2026/07/biblioteca-barrio-lleva-20-anos-construyendo-convivencia-cartagena/',
    imagen: '/images/trabajos/biblioteca-cartagena.webp',
  },
  {
    titulo: 'Fin al «de sueldos no se habla»: la transparencia salarial entra en las empresas',
    medio: 'Revista Haz',
    tema: 'rsc',
    temaLabel: 'RSC',
    año: '2026',
    url: 'https://hazrevista.org/transparencia/2026/03/fin-sueldos-no-se-habla-transparencia-salarial-entra-empresas/',
    imagen: '/images/trabajos/transparencia-salarial.webp',
  },
  {
    titulo: 'Las huellas del verano en el invierno europeo',
    medio: 'Revista Late · France 24',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2025',
    url: 'https://www.revistalate.net/las-huellas-del-verano-en-el-invierno-europeo/',
    destacado: 'Investigación',
  },
  {
    titulo: 'The not-so-sunny side of sunscreen',
    medio: 'Journalismfund Europe',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2025',
    url: 'https://www.journalismfund.eu/not-so-sunny-side-of-sunscreen',
    destacado: 'Investigación',
  },
  {
    titulo: 'Ostras para regenerar el Mar Menor',
    medio: 'Ballena Blanca Nº42',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2025',
    url: 'https://ballenablanca.es/producto/42/',
  },
  {
    titulo: 'El Mar Menor, una laguna salada que lucha por sobrevivir',
    medio: 'Revista Late',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2023',
    url: 'https://www.revistalate.net/el-mar-menor-una-laguna-salada-que-lucha-por-sobrevivir/',
    destacado: 'Investigación',
  },
  {
    titulo: 'From Colombia to Germany. The impact of coal route',
    medio: 'Journalismfund Europe',
    tema: 'ambiente',
    temaLabel: 'Clima · Industria',
    año: '2023',
    url: 'https://www.journalismfund.eu/coal-route',
    destacado: 'Investigación',
  },
  {
    titulo: 'Los imprescindibles. Temporeros en la Huerta de Europa',
    medio: 'Mundo Negro',
    tema: 'migracion',
    temaLabel: 'Migración',
    año: '2018',
    url: 'http://mundonegro.es/los-imprescindibles/',
  },
  {
    titulo: 'La paz que llega con la salud',
    medio: 'Mundo Negro',
    tema: 'social',
    temaLabel: 'Salud · Paz',
    año: '2018',
    url: 'http://mundonegro.es/la-paz-que-llega-con-la-salud/',
  },
  {
    titulo: 'La biblioteca de las mujeres de Estambul',
    medio: 'Altaïr Magazine',
    tema: 'social',
    temaLabel: 'Derechos de la mujer',
    año: '2020',
    url: 'https://www.altairmagazine.com/voces/la-biblioteca-de-las-mujeres/',
    destacado: 'Premio',
  },
  {
    titulo: 'La judería escondida del Castillo de Lorca',
    medio: 'National Geographic',
    tema: 'viajes',
    temaLabel: 'Viajes · Historia',
    año: '2022',
    url: 'https://viajes.nationalgeographic.com.es/a/juderia-escondida-durante-siglos-dentro-castillo_17078',
  },
  {
    titulo: 'Cabo Cope y Puntas de Calnegre, las últimas playas vírgenes de Murcia',
    medio: 'National Geographic',
    tema: 'viajes',
    temaLabel: 'Viajes · Naturaleza',
    año: '2022',
    url: 'https://viajes.nationalgeographic.com.es/a/cabo-cope-y-puntas-calnegre-ultimas-playas-virgenes-litoral-murcia_16866',
  },
  {
    titulo: 'De las calles de Recife a los fogones',
    medio: 'El País',
    tema: 'social',
    temaLabel: 'Desarrollo social',
    año: '2016',
    url: 'https://elpais.com/elpais/2016/11/29/planeta_futuro/1480440360_379651.html',
    destacado: 'Premio',
  },
  {
    titulo: 'La solución pasa por eliminar el mosquito',
    medio: 'El País',
    tema: 'social',
    temaLabel: 'Salud pública',
    año: '2016',
    url: 'https://elpais.com/elpais/2016/11/29/planeta_futuro/1480440360_379651.html',
  },
];

// Los 6 trabajos destacados en portada, en el orden acordado con Rocío
const destacadosTitulos = [
  'La biblioteca de barrio que lleva 20 años construyendo convivencia en Cartagena',
  'Fin al «de sueldos no se habla»: la transparencia salarial entra en las empresas',
  'Ostras para regenerar el Mar Menor',
  'From Colombia to Germany. The impact of coal route',
  'The not-so-sunny side of sunscreen',
  'El Mar Menor, una laguna salada que lucha por sobrevivir',
];

export const trabajosDestacados = destacadosTitulos
  .map((titulo) => trabajos.find((t) => t.titulo === titulo))
  .filter((t): t is Trabajo => Boolean(t));
