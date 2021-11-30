const glob = require('glob');

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

module.exports = { getFilesList };
