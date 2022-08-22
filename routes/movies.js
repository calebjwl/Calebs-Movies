var express = require('express');
var router = express.Router();

const movies = [
  {
    name: 'Jaws',
    description: `When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.`,
    src: 'jaws',
    rating: 'PG',
    runtime: '124 minutes',
    year: 1975,
  },
  {
    name: 'Pulp Fiction',
    description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    src: 'pulp-fiction',
    rating: 'R',
    runtime: '154 minutes',
    year: 1994,
  },
  {
    name: 'Star Wars',
    description: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
    src: 'star-wars',
    rating: 'PG',
    runtime: '121 minutes',
    year: 1977,
  },
  {
    name: 'Taxi Driver',
    description: 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.',
    src: 'taxi-driver',
    rating: 'R',
    runtime: '114 minutes',
    year: 1976,
  },
  {
    name: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    src: 'dark-knight',
    rating: 'PG-13',
    runtime: '152 minutes',
    year: 2008,
  },
  {
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
    src: 'the-godfather',
    rating: 'R',
    runtime: '175 minutes',
    year: 1972,
  },
  {
    name: 'The Lion King',
    description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    src: 'lion-king',
    rating: 'G',
    runtime: '88 minutes',
    year: 1994,
  },
  {
    name: 'The Texas Chain Saw Massacre',
    description: 'Five friends head out to rural Texas to visit the grave of a grandfather. On the way they stumble across what appears to be a deserted house, only to discover something sinister within. Something armed with a chainsaw.',
    src: 'texas-chainsaw',
    rating: 'R',
    runtime: '83 minutes',
    year: 1974,
  },
  {
    name: 'Titanic',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    src: 'titanic',
    rating: 'PG-13',
    runtime: '194 minutes',
    year: 1997,
  },
  {
    name: 'Toy Story',
    description: `A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.`,
    src: 'toy-story',
    rating: 'G',
    runtime: '81 minutes',
    year: 1995,
  },
];

router.get('/', (_req, res, _next) => {
  res.json(movies);
});

module.exports = router;
