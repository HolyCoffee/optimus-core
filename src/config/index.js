const path = require('path');
const glob = require('glob');
const util = require('util');

function getConfig() {
  const argvs = process.argv;
  const pathIndex = argvs.indexOf('--path');

  let pathToConfig = 'optimus.config.js';
  let config = {};

  if (~pathIndex && pathIndex < argvs.length - 1) {
    pathToConfig = argvs[pathIndex + 1];
  }

  try {
    config = require(path.resolve(pathToConfig));
  } catch {
    console.error(`\n\x1b[31m[Error]\x1b[0m: Cannot find module ${pathToConfig}\n`);
  }

  return config;
}

async function getFilesList(paths) {
  const promiseGlob = util.promisify(glob);
  let filesList = [];

  for (const path of paths) {
    const files = await promiseGlob(path);

    filesList = filesList.concat(files);
  }

  return filesList;
}

module.exports = {
  getConfig,
  getFilesList,
};
