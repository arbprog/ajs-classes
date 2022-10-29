import Undead from '../undead';

test('Undead', () => {
  const char = new Undead('Undead', 'Undead', 100, 1, 25, 25);
  expect(char).toBeDefined();
  expect(char.type).toEqual('Undead');
  expect(char.attack).toEqual(25);
  expect(char.defence).toEqual(25);
});
