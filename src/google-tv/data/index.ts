import { TV_SHOWS } from './tv-items';
import { shuffle } from './utils';

export * from './tv-items';
export * from './user';

const randomTvShowOrder = shuffle(TV_SHOWS);

export const SPOTLIGHT_TV_ITEM = randomTvShowOrder.splice(0, 1)[0];

export const TOP_PICKS_1 = randomTvShowOrder.splice(0, 8);
export const TOP_PICKS_2 = randomTvShowOrder.splice(0, 4);
export const TOP_PICKS_3 = randomTvShowOrder.splice(0, 7);
