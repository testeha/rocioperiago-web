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
    titulo: 'Fin al «de sueldos no se habla»: transparencia salarial en las empresas españolas',
    medio: 'Revista Haz',
    tema: 'rsc',
    temaLabel: 'RSC',
    año: '2026',
    url: 'https://hazrevista.org/author/rocio-periago/',
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
    url: 'https://journalismfund.eu/not-so-sunny-side-of-sunscreen',
    destacado: 'Investigación',
  },
  {
    titulo: 'Ostras para regenerar el Mar Menor',
    medio: 'Ballena Blanca Nº42',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2024',
    url: 'https://ballenablanca.es/producto/42/',
  },
  {
    titulo: 'El Mar Menor, laguna salada que lucha por sobrevivir',
    medio: 'Revista Late',
    tema: 'ambiente',
    temaLabel: 'Medio ambiente',
    año: '2024',
    url: 'https://www.revistalate.net/el-mar-menor-una-laguna-salada-que-lucha-por-sobrevivir/',
  },
  {
    titulo: 'La ruta del carbón Colombia–Alemania',
    medio: 'Journalismfund Europe',
    tema: 'ambiente',
    temaLabel: 'Clima · Industria',
    año: '2023',
    url: 'https://journalismfund.eu/coal-route',
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

export const trabajosDestacados = trabajos.slice(0, 5);
