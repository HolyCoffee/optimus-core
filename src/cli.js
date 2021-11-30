const path = require('path');
const yargs = require('yargs');

const startAnalysis = require('./main');
const { consoleError } = require('./constants');

module.exports = function cli() {
  const configFlags = yargs
    .option('config', {
      alias: 'c',
      type: 'string',
      default: 'optimus.config.js',
      description: 'path to configuration file',
    })
    .parse();
  const configPath = configFlags.c || configFlags.config;

  let config = {};

  try {
    config = require(path.resolve(configPath));
  } catch {
    throw new ReferenceError(`${consoleError}: Cannot find module ${configPath}`);
  }

  startAnalysis(config);
};
