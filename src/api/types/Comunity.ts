export interface Community {
  name: string;
  slug: string;
}

export interface Communities {
  [key: string]: Community;
}

export const communities: Communities = {
  'san-pedro': {
    name: 'San Pedro',
    slug: 'san-pedro',
  },
  'san-ramon': {
    name: 'San Ramón',
    slug: 'san-ramon',
  },
  cervellon: {
    name: 'Cervellón',
    slug: 'cervellon',
  },
  armengol: {
    name: 'Armengol',
    slug: 'armengol',
  },
  'cristo-redentor': {
    name: 'Cristo Redentor',
    slug: 'cristo-redentor',
  },
  'la-merced': {
    name: 'La Merced',
    slug: 'la-merced',
  },
  'beata-mariana-de-jesus': {
    name: 'Beata Mariana de Jesús',
    slug: 'beata-mariana-de-jesus',
  },
};
