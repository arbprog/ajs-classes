import Bowman from '../bowman';

test('Bowman', () => {
  const char = new Bowman('Bowman', 'Bowman', 100, 1, 25, 25);
  expect(char).toBeDefined();
  expect(char.type).toEqual('Bowman');
  expect(char.attack).toEqual(25);
  expect(char.defence).toEqual(25);
});
