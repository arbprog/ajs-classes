import Daemon from '../daemon';

test('Daemon', () => {
  const char = new Daemon('Daemon', 'Daemon', 100, 1, 10, 40);
  expect(char).toBeDefined();
  expect(char.type).toEqual('Daemon');
  expect(char.attack).toEqual(10);
  expect(char.defence).toEqual(40);
});
