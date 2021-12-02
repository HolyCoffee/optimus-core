import cli from '../src/cli';

describe('cli', () => {
  test('Should throw exception if config file in not defined', () => {
    expect(() => cli()).toThrow();
  });
});
