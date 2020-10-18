export interface TvItem {
  backdropImage: string;
  title: string;
  description: string;
  provider: string;
}

const theMandalorian: TvItem = {
  title: 'The Mandalorian',
  description:
    'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.',
  provider: 'Disney+',
  backdropImage: 'https://image.tmdb.org/t/p/original/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg',
};

const westworld: TvItem = {
  title: 'Westworld',
  description:
    'A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/yGNnjoIGOdQy3douq60tULY8teK.jpg',
};

const lovecraftCountry: TvItem = {
  title: 'Lovecraft Country',
  description:
    'The anthology horror series follows 25-year-old Atticus Freeman, who joins up with his friend Letitia and his Uncle George to embark on a road trip across 1950s Jim Crow America to find his missing father. They must survive and overcome both the racist terrors of white America and the malevolent spirits that could be ripped from a Lovecraft paperback.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/qx7qy2GJOc7yGY6WENyBU3OVv7A.jpg',
};

const theBoys: TvItem = {
  title: 'The Boys',
  description:
    'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.',
  provider: 'Prime Video',
  backdropImage: 'https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg',
};

const goodOmens: TvItem = {
  title: 'Good Omens',
  description: 'Aziraphale, an angel, and Crowley, a demon, join forces to find the Antichrist and stop Armageddon.',
  provider: 'Prime Video',
  backdropImage: 'https://image.tmdb.org/t/p/original/omZbhqVDpXsfGMFUyxIjh1huqD.jpg',
};

const russianDoll: TvItem = {
  title: 'Russian Doll',
  description:
    "Nadia keeps dying and reliving her 36th birthday party. She's trapped in a surreal time loop -- and staring down the barrel of her own mortality.",
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/Aq6rWq3yIytfaSad4qabTUl8n0J.jpg',
};

const loveDeathAndRobots: TvItem = {
  title: 'Love, Death & Robots',
  description:
    'Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/e7VzDMrYKXVrVon04Uqsrcgnf1k.jpg',
};

const alteredCarbon: TvItem = {
  title: 'Altered Carbon',
  description:
    'After 250 years on ice, a prisoner returns to life in a new body with one chance to win his freedom: by solving a mind-bending murder.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/bebFVt9OqrvYxVIZHlzPG1A0Hjx.jpg',
};

const watchmen: TvItem = {
  title: 'Watchmen',
  description:
    'Set in an alternate history where “superheroes” are treated as outlaws, “Watchmen” embraces the nostalgia of the original groundbreaking graphic novel while attempting to break new ground of its own.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/gFeaXBnOO14aOQhMQrr5tbyhMTw.jpg',
};

const theWitcher: TvItem = {
  title: 'The Witcher',
  description:
    'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/kysKBF2CJG9qfQDSCDaboJrkZy1.jpg',
};

const theExpanse: TvItem = {
  title: 'The Expanse',
  description:
    "A thriller set two hundred years in the future following the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system to expose the greatest conspiracy in human history.",
  provider: 'Prime Video',
  backdropImage: 'https://image.tmdb.org/t/p/original/7yKtaRij2giAj0s09F6gmB8XIje.jpg',
};

const fargo: TvItem = {
  title: 'Fargo',
  description:
    'A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.',
  provider: 'FX',
  backdropImage: 'https://image.tmdb.org/t/p/original/xcJLhsFGVC4LVvucSqVXks2mnUJ.jpg',
};

const theWire: TvItem = {
  title: 'The Wire',
  description:
    'Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy, and distinctions between good and evil are routinely obliterated.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/oggnxmvofLtGQvXsO9bAFyCj3p6.jpg',
};

const betterCallSault: TvItem = {
  title: 'Better Call Saul',
  description:
    'Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in “criminal lawyer".',
  provider: 'AMC',
  backdropImage: 'https://image.tmdb.org/t/p/original/fhVjFMVFW53w2YY75VR9lfii416.jpg',
};

const houseOfCards: TvItem = {
  title: 'House of Cards',
  description:
    'Set in present day Washington, D.C., House of Cards is the story of Frank Underwood, a ruthless and cunning politician, and his wife Claire who will stop at nothing to conquer everything. This wicked political drama penetrates the shadowy world of greed, sex and corruption in modern D.C.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/A3bigAAa4u6EbDvmMpDc0GNIEtG.jpg',
};

const trueDetective: TvItem = {
  title: 'True Detective',
  description:
    'An American anthology police detective series utilizing multiple timelines in which investigations seem to unearth personal and professional secrets of those involved, both within or outside the law.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/bPLRjO2pcBx0WL73WUPzuNzQ3YN.jpg',
};

const breakingBad: TvItem = {
  title: 'Breaking Bad',
  description:
    "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
  provider: 'AMC',
  backdropImage: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
};

const cobrKai: TvItem = {
  title: 'Cobra Kai',
  description:
    'This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.',
  provider: 'YouTube',
  backdropImage: 'https://image.tmdb.org/t/p/original/2oRDmSZsMB1Gukv52AP227zu5w5.jpg',
};

const gameOfThrones: TvItem = {
  title: 'Game of Thrones',
  description:
    "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/1oICoQA7bgyyOhDVrPi2iR1CbmH.jpg',
};

const raisedByWolves: TvItem = {
  title: 'Raised by Wolves',
  description:
    'After Earth is ravaged by a great religious war, an atheistic android architect sends two of his creations, Mother and Father, to start a peaceful, godless colony on the planet Kepler-22b. Their treacherous task is jeopardized by the arrival of the Mithraic, a deeply devout religious order of surviving humans.',
  provider: 'HBO',
  backdropImage: 'https://image.tmdb.org/t/p/original/na2xUduK8HviOFT97TiFG2MkJmY.jpg',
};

const dark: TvItem = {
  title: 'Dark',
  description:
    'A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/qDKb6hCDsQJRHn6jFQcH0vf76r6.jpg',
};

const strangerThings: TvItem = {
  title: 'Stranger Things',
  description:
    'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
  provider: 'Netflix',
  backdropImage: 'https://image.tmdb.org/t/p/original/tcTjAGX9YPCMCrnXmbgXKKtECgh.jpg',
};

export const TV_SHOWS = [
  theMandalorian,
  westworld,
  lovecraftCountry,
  theBoys,
  goodOmens,
  russianDoll,
  loveDeathAndRobots,
  alteredCarbon,
  watchmen,
  theWitcher,
  theExpanse,
  fargo,
  theWire,
  betterCallSault,
  houseOfCards,
  trueDetective,
  breakingBad,
  cobrKai,
  gameOfThrones,
  raisedByWolves,
  dark,
  strangerThings,
];
