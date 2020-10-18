import { TV_SHOWS } from './tv-items';
import { shuffle } from './utils';

export * from './tv-items';
export * from './user';

export const SPOTLIGHT_TV_ITEM = shuffle(TV_SHOWS).splice(0, 1)[0];

export const TOP_PICKS = shuffle(TV_SHOWS).splice(0, 8);
export const SCI_FI_SAGAS = shuffle(TV_SHOWS).splice(0, 4);
export const TRENDING = shuffle(TV_SHOWS).splice(0, 7);
export const BINGEWORTHY_DRAMAS = shuffle(TV_SHOWS).splice(0, 3);
export const IN_YOUR_LIBRARY = shuffle(TV_SHOWS).splice(0, 6);
