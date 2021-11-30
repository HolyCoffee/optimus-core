import { getFilesList } from '../../src/config/index';

describe('getFilesList:', () => {
  test('Should return an array with paths to files', async () => {
    const pathsToFiles = await getFilesList(['test/__mocks__/*.js']);

    expect(pathsToFiles).toEqual(['test/__mocks__/index.js']);
  });

  test('Should return an empty array if files of undefined', async () => {
    const pathsToFiles = await getFilesList(['test/__mocks__/test.js']);

    expect(pathsToFiles).toEqual([]);
  });

  test('Should return an empty array if folder of undefined', async () => {
    const pathsToFiles = await getFilesList(['test/test']);

    expect(pathsToFiles).toEqual([]);
  });

  test('Should return an empty array if "paths" argument is not given', async () => {
    const pathsToFiles = await getFilesList();

    expect(pathsToFiles).toEqual([]);
  });

  test('Should throw exception if "paths" argument is not an array', async () => {
    await expect(getFilesList('test')).rejects.toThrow();
  });
});
