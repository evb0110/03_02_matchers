import sortPlayers from './sortPlayers';

test('sort simple input', () => {
  const heroes = [{
    name: 'мечник',
    health: 10,
  },
  {
    name: 'маг',
    health: 100,
  },
  {
    name: 'лучник',
    health: 80,
  },
  ];
  const expected = [{
    name: 'мечник',
    health: 10,
  },
  {
    name: 'лучник',
    health: 80,
  },
  {
    name: 'маг',
    health: 100,
  },
  ];
  const sorted = sortPlayers(heroes);
  expect(sorted).toEqual(expected);
});
