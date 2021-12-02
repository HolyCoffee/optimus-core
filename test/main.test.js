import startAnalysis from '../src/main';

describe('startAnalysis:', () => {
  test('Should get file data and call plugin', () => {
    const pluginMock = ({ fileData }) => {
      expect(fileData).toBe('test');
    };

    startAnalysis({
      plugins: [pluginMock],
      includes: ['test/__mocks__/index.js'],
    });
  });

  test('Should throw exception if plugins is not defined', () => {
    expect(() =>
      startAnalysis({
        includes: ['test/__mocks__/index.js'],
      })
    ).toThrow();
  });

  test('Should do nothing if includes is not defined', () => {
    const pluginMock = jest.fn();

    startAnalysis({
      plugins: [pluginMock],
    });

    expect(pluginMock).not.toHaveBeenCalled();
  });
});
