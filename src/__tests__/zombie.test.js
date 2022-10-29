import Zombie from '../zombie';

test('Zombie', () => {
  const char = new Zombie('Zombie', 'Zombie', 100, 1, 40, 10);
  expect(char).toBeDefined();
  expect(char.type).toEqual('Zombie');
  expect(char.attack).toEqual(40);
  expect(char.defence).toEqual(10);
});
