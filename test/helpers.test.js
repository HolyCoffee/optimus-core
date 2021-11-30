import { getFilesList } from '../src/helpers';

describe('getFilesList:', () => {
  test('Should return an array with paths to files', () => {
    const pathsToFiles = getFilesList(['test/__mocks__/*.js']);

    expect(pathsToFiles).toEqual(['test/__mocks__/index.js']);
  });

  test('Should return an empty array if files of undefined', () => {
    const pathsToFiles = getFilesList(['test/__mocks__/test.js']);

    expect(pathsToFiles).toEqual([]);
  });

  test('Should return an empty array if folder of undefined', () => {
    const pathsToFiles = getFilesList(['test/test']);

    expect(pathsToFiles).toEqual([]);
  });

  test('Should return an empty array if "paths" argument is not given', () => {
    const pathsToFiles = getFilesList();

    expect(pathsToFiles).toEqual([]);
  });

  test('Should throw exception if "paths" argument is not an array', () => {
    expect(() => getFilesList('test')).toThrow();
  });
});
