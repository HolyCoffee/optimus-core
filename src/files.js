const glob = require('glob');
const { stat, readFile } = require('fs/promises');

const { consoleError } = require('./constants');

function getFilesList(paths = []) {
  if (!Array.isArray(paths)) {
    throw new TypeError(`${consoleError}: Argument "paths" should be an array!`);
  }

  let filesList = [];

  for (const path of paths) {
    const files = glob.sync(path);

    filesList = filesList.concat(files);
  }

  return filesList;
}

async function getFileData(filePath) {
  try {
    if (!filePath || typeof filePath !== 'string') {
      throw new TypeError('filePath must be a string!');
    }

    const fileStat = await stat(filePath);
    const fileData = await readFile(filePath, 'utf8');

    return { fileStat, fileData };
  } catch (error) {
    throw new Error(`${consoleError}: ${error}`);
  }
}

async function startPlugins(filePath, config) {
  try {
    const { fileStat, fileData } = await getFileData(filePath);

    for (const plugin of config.plugins) {
      plugin({ fileData, fileStat }, config);
    }
  } catch (error) {
    throw new Error(`${consoleError}: ${error}`);
  }
}

module.exports = { getFilesList, getFileData, startPlugins };
