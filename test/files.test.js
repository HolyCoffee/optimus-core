import { getFilesList, getFileData } from '../src/files';

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

describe('getFileData:', () => {
  test('Should return correct fileData', async () => {
    const { fileData } = await getFileData('test/__mocks__/index.js');

    expect(fileData).toBe('test');
  });

  test('Should throw exception if "filePath" argument is not presented', async () => {
    await expect(getFileData()).rejects.toThrow();
  });

  test('Should throw exception if "filePath" argument is not a string', async () => {
    await expect(getFileData(1)).rejects.toThrow();
  });

  test('Should throw exception if file is undefined', async () => {
    await expect(getFileData('test/__mocks__/test.js')).rejects.toThrow();
  });
});
