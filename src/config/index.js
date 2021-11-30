const glob = require('glob');

async function getFilesList(paths = []) {
  if (!Array.isArray(paths)) {
    throw new TypeError('Argument "paths" should be an array!');
  }

  let filesList = [];

  for (const path of paths) {
    const files = glob.sync(path);

    filesList = filesList.concat(files);
  }

  return filesList;
}

module.exports = { getFilesList };
