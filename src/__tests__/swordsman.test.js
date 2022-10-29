import Swordsman from '../swordsman';

test('Swordsman', () => {
  const char = new Swordsman('Swordsman', 'Swordsman', 100, 1, 40, 10);
  expect(char).toBeDefined();
  expect(char.type).toEqual('Swordsman');
  expect(char.attack).toEqual(40);
  expect(char.defence).toEqual(10);
});
