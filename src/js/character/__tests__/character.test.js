import Character from '../character';

test('Should create new character', () => {
  const char = new Character('Bob', 'Bowman');
  const expectedChar = {
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowman',
  };
  expect(char).toEqual(expectedChar);
});

test('Should throw error "name length"', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('B', 'Bowman'); }).toThrow(/длиной не менее 2 и не более/);
});

test('Should throw error "invalid class"', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('Bob', 'Ranger'); }).toThrow(/недопустимый класс/);
});
