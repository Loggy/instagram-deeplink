import { SetUp } from '../index';
test('SetUp returns Hello, <name>!', () => {
  expect(SetUp('Mike')).toBe('Hello, Mike!');
});
