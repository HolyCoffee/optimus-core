import { getFilesList } from '../../../src/config/index';

describe('getFilesList', () => {
  test('Should return an array with paths to files', async () => {
    const result = await getFilesList(['test/mocks/*.js']);

    expect(result).toEqual(['test/mocks/index.js']);
  });

  test('Should return an empty array if files of undefined', async () => {
    const result = await getFilesList(['test/mocks/test.js']);

    expect(result).toEqual([]);
  });

  test('Should return an empty array if folder of undefined', async () => {
    const result = await getFilesList(['test/test']);

    expect(result).toEqual([]);
  });

  test('Should return an empty array if "paths" argument is not given', async () => {
    const result = await getFilesList();

    expect(result).toEqual([]);
  });

  test('Should throw exception if "paths" argument is not an array', async () => {
    await expect(getFilesList('test')).rejects.toThrow();
  });
});
