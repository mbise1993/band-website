import * as dateFns from 'date-fns';

interface ShowData {
  title: string;
  date: Date;
  flyerUrl: string;
  venueName: string;
  venueLink?: string;
  ticketLink?: string;
}

export interface Show extends ShowData {
  formattedDate: string;
}

const SHOWS: ShowData[] = [
  {
    title:
      'Victim Blamed, Houses We Die In, Ashes at Last, In Which Divides Us, Pink Michigan, Ghosthouse, Trapin Percatory',
    date: getDate('2025-04-19'),
    flyerUrl: '/flyers/2025-04-19.jpg',
    venueName: 'Independence Brewing (Austin)',
    venueLink: 'https://independencebrewing.com/',
  },
  {
    title:
      "Don't Fear the End, Houses We Die In, fingerswoventogether, Monterey, andwhentheskywasopened",
    date: getDate('2025-03-27'),
    flyerUrl: '/flyers/2025-03-27.jpg',
    venueName: "Will's Pub (Orlando)",
    venueLink: 'https://willspub.org/',
    ticketLink:
      'https://www.ticketweb.com/event/dont-fear-the-end-with-wills-pub-tickets/14165113',
  },
  {
    title: "Don't Fear the End, Houses We Die In, Knife In A Gunfight, Dremm",
    date: getDate('2025-03-26'),
    flyerUrl: '/flyers/2025-03-26.jpg',
    venueName: 'Fred Hampton Free Store (New Orleans)',
    venueLink: 'https://www.instagram.com/gno.cc.eventspace/',
  },
  {
    title:
      "Houses We Die In, Don't Fear the End, Kurama, Claymore, xMercyx, Blood Buffet",
    date: getDate('2025-03-25'),
    flyerUrl: '/flyers/2025-03-25.jpg',
    venueName: 'The White Swan (Houston)',
    venueLink: 'https://www.whiteswanlive.com/',
  },
  {
    title: "March Tour w/ Don't Fear the End",
    date: getDate('2025-03-24'),
    flyerUrl: '/flyers/2025-03-tour.jpg',
    venueName: 'Texas, NOLA, Florida',
  },
  {
    title: 'Invasion Fest',
    date: getDate('2025-03-08'),
    flyerUrl: '/flyers/2025-03-08.jpg',
    venueName: 'The End (Houston)',
    venueLink: 'https://www.instagram.com/the_end_houston/',
  },
  {
    title:
      'Destroy All Humans, Houses We Die In, Fear of Loss, Ghosthouse, Nervepoint, Postal, Ricin',
    date: getDate('2025-03-06'),
    flyerUrl: '/flyers/2025-03-06.jpg',
    venueName: 'Private Park (San Marcos)',
  },
  {
    title: 'Banged Out, Palefade, Houses We Die In',
    date: getDate('2025-01-20'),
    flyerUrl: '/flyers/2025-01-20.jpg',
    venueName: 'Low Down Lounge',
    venueLink: 'https://www.lowdownlounge.com/',
  },
  {
    title: 'Tar Creek, JAW/LINE, Houses We Die In, Born Savage',
    date: getDate('2025-01-19'),
    flyerUrl: '/flyers/2025-01-19.jpg',
    venueName: 'Mohawk',
    venueLink: 'https://mohawkaustin.com/',
    ticketLink: 'https://mohawkaustin.com/event/?id=-2853509351522476205',
  },
  {
    title: 'Buckle Bunnies Benefit Show',
    date: getDate('2025-01-11'),
    flyerUrl: '/flyers/2025-01-11.jpg',
    venueName: 'Private Park (San Marcos)',
  },
  {
    title: 'FREE WEEK at Mohawk',
    date: getDate('2025-01-02'),
    flyerUrl: '/flyers/2025-01-02.jpg',
    venueName: 'Mohawk',
    venueLink: 'https://mohawkaustin.com/',
  },
  {
    title:
      'Ghosthouse, Postal, Houses We Die In, Safely Home, Slum Mafia, Censored, Parasite',
    date: getDate('2024-12-21'),
    flyerUrl: '/flyers/2024-12-21.jpg',
    venueName: 'Galvan Ballroom (Corpus Christi, TX)',
    venueLink: 'http://galvanballroom.com/',
  },
  {
    title:
      'The High Cost of Playing God, Houses We Die In, Votive, Missouri Executive Order 44',
    date: getDate('2024-12-13'),
    flyerUrl: '/flyers/2024-12-13.jpg',
    venueName: 'Monkeywrench Books',
    venueLink: 'https://www.monkeywrenchbooks.org/',
  },
  {
    title:
      'Lacerated, Houses We Die In, Crooked Life, knifeinagunfight, As My Will Caves',
    date: getDate('2024-12-09'),
    flyerUrl: '/flyers/2024-12-09.jpg',
    venueName: 'The Free Store (New Orleans)',
  },
  {
    title: 'No Sleep Fest Pre-show',
    date: getDate('2024-12-06'),
    flyerUrl: '/flyers/2024-12-06.jpg',
    venueName: 'Moontower Inn',
    venueLink: 'https://www.moontowerinn.com/',
  },
  {
    title: 'Lacerated, Houses We Die In, Scrape, McBryde, Ten Times Demise',
    date: getDate('2024-12-05'),
    flyerUrl: '/flyers/2024-12-05.jpg',
    venueName: 'Far Out Lounge',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink:
      'https://www.tickettailor.com/events/thefaroutloungestage/1487881',
  },
  {
    title:
      'Houses We Die In, Lacerated, True Grit, Ritual Abuse, Misanthrope, Hatred Creation',
    date: getDate('2024-12-04'),
    flyerUrl: '/flyers/2024-12-04.jpg',
    venueName: 'Haltom Theater',
    venueLink: 'https://www.thehaltomtheater.com/',
  },
  {
    title:
      'Bosh, Girl of Glass, Thus Spoke Zarathustra, Withpaperwings, Houses We Die In',
    date: getDate('2024-12-03'),
    flyerUrl: '/flyers/2024-12-03.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
  {
    title: 'Houses We Die In, Postal, Havrath, Skabatha, Chained In Sin',
    date: getDate('2024-11-22'),
    flyerUrl: '/flyers/2024-11-22.jpg',
    venueName: 'UTSA MOB',
  },
  {
    title:
      'Live Longer Burn Everything, Houses We Die In, Victim Blamed, Postal',
    date: getDate('2024-11-04'),
    flyerUrl: '/flyers/2024-11-04.jpg',
    venueName: 'The Starlighter',
    venueLink: 'https://thestarlighter.com/',
  },
  {
    title:
      'Live Longer Burn Everything, Houses We Die In, My Dad Died, Rebecka',
    date: getDate('2024-11-03'),
    flyerUrl: '/flyers/2024-11-03.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
  },
  {
    title: '2024 Halloween Havoc',
    date: getDate('2024-10-31'),
    flyerUrl: '/flyers/2024-10-31.jpg',
    venueName: 'The Ballroom',
    venueLink: 'https://www.ballroomtx.com/',
  },
  {
    title: 'Glassing, Drip Fed, Tied Up, Houses We Die In',
    date: getDate('2024-10-21'),
    flyerUrl: '/flyers/2024-10-21.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
    ticketLink:
      'https://dice.fm/partner/dice/event/8eap2r-glassing-drip-fed-tied-up-houses-we-die-in-21st-oct-chess-club-austin-tickets?dice_id=4095852&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1340370699146078524&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1XdMTExMTrZMMTczMravK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQCpQWrUOwAAAA',
  },
  {
    title: 'Unity TX, Silly Goose, Soulkeeper, Houses We Die In',
    date: getDate('2024-10-20'),
    flyerUrl: '/flyers/2024-10-20.jpg',
    venueName: 'Empire Control Room',
    venueLink: 'https://empireatx.com/',
    ticketLink: 'https://vor.us/b1c2c',
  },
  {
    title: 'The Way It Is Fest (Benefit for Gaza)',
    date: getDate('2024-09-28'),
    flyerUrl: '/flyers/2024-09-28.jpg',
    venueName: 'The Far Out Lounge',
    venueLink: 'http://www.thefaroutaustin.com/',
  },
  {
    title:
      'Chernobyl the Secret, DGMA, Speak Slow, Houses We Die In, Blank Slate',
    date: getDate('2024-09-22'),
    flyerUrl: '/flyers/2024-09-22.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://comeandtakeitproductions.com/',
  },
  {
    title:
      'Cable, Houses We Die In, War Stories, Sugar, Scissor Tailfly Catcher',
    date: getDate('2024-09-13'),
    flyerUrl: '/flyers/2024-09-13.jpg',
    venueName: '1810 Ojeman (Houston, TX)',
    venueLink: 'https://www.eighteentenojeman.com/',
  },
  {
    title: 'Houses We Die In, Rose Ceremony, Sentiments, Recurser, Dattura',
    date: getDate('2024-08-17'),
    flyerUrl: '/flyers/2024-08-17.jpg',
    venueName: 'Chess Club',
    venueLink: 'https://chessclubaustin.com/',
  },
  {
    title: 'Y2K Fest',
    date: getDate('2024-08-16'),
    flyerUrl: '/flyers/2024-08-16.jpg',
    venueName: 'Haltom Theater',
    venueLink: 'https://www.instagram.com/thehaltomtheater/?hl=en',
  },
  {
    title:
      'I Set My Friends On Fire, 40% Dolomite, Houses We Die In, Crossways.3000, Audacious Absurdist, Ghosthouse',
    date: getDate('2024-07-28'),
    flyerUrl: '/flyers/2024-07-28.jpg',
    venueName: 'Galvan Ballroom (Corpus Christi, TX)',
  },
  // {
  //   title: 'Rare Bloom, Rain Check, Lease Agreement, Postal, Houses We Die In',
  //   date: getDate('2024-07-27'),
  //   flyerUrl: '/flyers/2024-07-27.jpg',
  //   venueName: 'The Alley (San Antonio, TX)',
  // },
  {
    title: 'Clique, Joust, Scathe, Houses We Die In, Weak Spot',
    date: getDate('2024-07-20'),
    flyerUrl: '/flyers/2024-07-20.jpg',
    venueName: 'B-Side (San Antonio, TX)',
  },
  {
    title: 'Hot Summer Nights (Banged Out, DGMA, Never Rest, Houses We Die In)',
    date: getDate('2024-07-18'),
    flyerUrl: '/flyers/2024-07-18.jpg',
    venueName: 'Valhalla',
    venueLink: 'https://www.facebook.com/valhallatavern/',
  },
  {
    title:
      'Houses We Die In, Virtue, Feed Your Body to the Void, McBryde, Soul Exchange',
    date: getDate('2024-07-13'),
    flyerUrl: '/flyers/2024-07-13.jpg',
    venueName: "Sunny's Backyard",
    venueLink: 'https://www.sunnysbackyard.com/',
  },
  // {
  //   title: 'Houses We Die In, Catharsis, Knit, Grovetender',
  //   date: getDate('2024-07-09'),
  //   flyerUrl: '/flyers/2024-07-09.jpg',
  //   venueName: 'Depot DIY Skatepark (Lubbock, TX)',
  // },
  // {
  //   title: 'VULGARFEST (Day 1)',
  //   date: getDate('2024-07-06'),
  //   flyerUrl: '/flyers/2024-07-06.jpg',
  //   venueName: 'Los Angeles, CA - The American Legion (9026 Sunland Blvd.)',
  // },
  {
    title:
      'Fatal Wounds, Purest Bond, Lacerated, Houses We Die In, Watch You Fall, Death Whispers',
    date: getDate('2024-07-03'),
    flyerUrl: '/flyers/2024-07-03.jpg',
    venueName: 'San Diego, CA - The Che Cafe',
    venueLink: 'http://thechecafe.blogspot.com/',
  },
  // {
  //   title:
  //     'Houses We Die In, Undissassembled, Rocky Mountain Oysters, Rotten Disgust, Predecessor',
  //   date: getDate('2024-07-01'),
  //   flyerUrl: '/flyers/2024-07-01.jpg',
  //   venueName: "El Paso, TX - Vincent and Melo's",
  //   venueLink: 'https://vincentandmelos.com/',
  // },
  {
    title:
      'Girl of Glass, Ballista, Victim Blamed, Misanthrope, Houses We Die In, Ghosthouse',
    date: getDate('2024-06-29'),
    flyerUrl: '/flyers/2024-06-29.jpg',
    venueName: '922 Dorthy Dr. Corpus Christi',
  },
  {
    title: 'HOUSES SUMMER TOUR',
    date: getDate('2024-06-29'),
    flyerUrl: '/flyers/2024-07-tour.jpg',
    venueName: 'Southwest USA',
  },
  {
    title: 'HOODS w/ Houses We Die In, Born Savage, Los Cabrones',
    date: getDate('2024-06-19'),
    flyerUrl: '/flyers/2024-06-19.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title: 'Everyone Dies In Utah, Cloud Anchor, Houses We Die In, Aeganova',
    date: getDate('2024-06-14'),
    flyerUrl: '/flyers/2024-06-14.jpg',
    venueName: "Sean's Pub (Harker Heights, TX)",
    venueLink: 'https://www.facebook.com/seanspubheights/',
  },
  // {
  //   title: 'Burning Years, Houses We Die In, Speak Slow, McBryde',
  //   date: getDate('2024-05-31'),
  //   flyerUrl: '/flyers/2024-05-31.jpg',
  //   venueName: "Sunny's Backyard",
  //   venueLink: 'https://www.sunnysbackyard.com/',
  // },
  {
    title: 'BIG TEXAS METAL FEST (Day 1)',
    date: getDate('2024-05-24'),
    flyerUrl: '/flyers/2024-05-24.jpg',
    venueName: 'The Far Out Lounge & Stage',
    venueLink: 'http://www.thefaroutaustin.com/',
    ticketLink: 'https://vor.us/b12fb',
  },
  // {
  //   title:
  //     'Postal EP Release w/ Crossways.3000, Houses We Die In, Fountain Mouth, Faint',
  //   date: getDate('2024-05-10'),
  //   flyerUrl: '/flyers/2024-05-10.jpg',
  //   venueName: 'B-Side',
  //   venueLink: 'https://www.instagram.com/bsidesatx/',
  // },
  {
    title: 'UTSA Underground Music Festival',
    date: getDate('2024-05-02'),
    flyerUrl: '/flyers/2024-05-02.jpg',
    venueName: 'UTSA tunnels',
  },
  {
    title:
      'Slander, Ghosthouse, May I Die, Houses We Die In, Audacious Absurdist',
    date: getDate('2024-03-23'),
    flyerUrl: '/flyers/2024-03-23.jpg',
    venueName: 'The Red Rabbit',
    venueLink: 'https://www.instagram.com/theredrabbit361/',
  },
  {
    title:
      "Lacerated, Don't Fear the End, Fortuna Malvada, Fear of Loss, Houses We Die In",
    date: getDate('2024-03-21'),
    flyerUrl: '/flyers/2024-03-21.jpg',
    venueName: 'Snake Hill Social Club',
    venueLink: 'https://www.instagram.com/snakehill.satx/',
  },
  {
    title: 'Palefade, Othiel, Houses We Die In, Larvae, Rose Ceremony',
    date: getDate('2024-03-16'),
    flyerUrl: '/flyers/2024-03-16.jpg',
    venueName: 'Arnold House (DM for address)',
  },
  {
    title:
      'SXSE Metal Showcase w/ Never Rest, Reign, Cult Burner, Postal, Deadmouth, Houses We Die In',
    date: getDate('2024-03-12'),
    flyerUrl: '/flyers/2024-03-12.jpg',
    venueName: 'Come and Take It Live',
    venueLink: 'https://www.comeandtakeitlive.com/',
    ticketLink:
      'https://www.etix.com/ticket/p/30695894/disaster-fest-austin-come-and-take-it-live',
  },
  {
    title: 'Glassing w/ Throat Piss, God Shell, Houses We Die In',
    date: getDate('2024-03-10'),
    flyerUrl: '/flyers/2024-03-10.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  // {
  //   title:
  //     'Far From It w/ Fear of Loss, Fleishwolf, Houses We Die In, Postal, Dogmad, Voracious Contempt, Deadite',
  //   date: getDate('2024-03-03'),
  //   flyerUrl: '/flyers/2024-03-03.jpg',
  //   venueName: 'B-Side',
  //   venueLink: 'https://www.instagram.com/bsidesatx/',
  // },
  // {
  //   title: 'Livid, Noisy Neighbors, Laughing Matter, Houses We Die In',
  //   date: getDate('2024-02-28'),
  //   flyerUrl: '/flyers/2024-02-28.jpg',
  //   venueName: '13th Floor',
  //   venueLink: 'https://the13thflooraustin.com/',
  // },
  {
    title: 'Slow Pulse, Ritual, The High Cost of Playing God, Houses We Die In',
    date: getDate('2024-02-25'),
    flyerUrl: '/flyers/2024-02-25.jpg',
    venueName: '13th Floor',
    venueLink: 'https://the13thflooraustin.com/',
  },
  {
    title:
      "Victim Blamed album release show w/ Salvinorin-A, Phonefoot, Houses We Die In, Far of Loss, Larval Therapy, 4waydancebattle, Nicole's Death",
    date: getDate('2024-02-24'),
    flyerUrl: '/flyers/2024-02-24.jpg',
    venueName: '1540 West Harlan Ave. San Antonio, TX',
  },
  // {
  //   title: 'CNVCT, Rotten Disgust, Linger, Lament, Houses We Die In',
  //   date: getDate('2024-02-09'),
  //   flyerUrl: '/flyers/2024-02-09.jpg',
  //   venueName: 'Valhalla',
  //   venueLink: 'https://www.instagram.com/valhallatavern/',
  // },
  {
    title:
      'End Means (Final Show) w/ Upsurge, Fear of Loss, Lowball, Houses We Die In',
    date: getDate('2023-12-22'),
    flyerUrl: '/flyers/2023-12-22.png',
    venueName: 'Paper Tiger',
    venueLink: 'https://papertigersatx.com/',
  },
  {
    title:
      'The High Cost of Playing God and The Vinous w/ Votive & Houses We Die In',
    date: getDate('2023-11-30'),
    flyerUrl: '/flyers/2023-11-30.jpg',
    venueName: 'Independence Brewing',
    venueLink: 'https://independencebrewing.com/',
  },
];

export function getDate(day: string) {
  return new Date(`${day}T20:00:00.000`);
}

export function getShows() {
  const upcoming: Show[] = [];
  const past: Show[] = [];
  for (const show of SHOWS) {
    const showForDisplay = {
      ...show,
      formattedDate: dateFns.format(show.date, 'EEEE, MMM do'),
    };
    if (dateFns.isFuture(show.date)) {
      // Use unshift to show soonest shows first
      upcoming.unshift(showForDisplay);
    } else {
      // Use push for regular, reverse-chronological order
      past.push(showForDisplay);
    }
  }

  return { upcoming, past };
}
