import sortPlayers from './sortPlayers';

test('input not an array throws', () => {
  const heroes = 1;
  expect(() => sortPlayers(heroes)).toThrow();
});

test('input with player not an object throws', () => {
  const heroes = [1];
  expect(() => sortPlayers(heroes)).toThrow();
});


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

test('wrong input throws', () => {
  const heroes = [
    {
      name: 'эльф',
      health: 'маг',
    },
    {
      name: 'маг',
      health: 20,
    },
  ];
  expect(() => sortPlayers(heroes)).toThrow();
});
